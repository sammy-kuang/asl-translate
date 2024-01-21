import sys
import traceback
from flask import Flask, request, jsonify, send_file
from translate_service import translate, stitch_videos, VIDEO_FORMAT, SERVER_ERROR_VIDEO
from scraper import download_deps
from bson.objectid import ObjectId
from mongo import FS, search_file_in_gridfs, upload_to_gridfs
import string
import tempfile

app = Flask(__name__)


# temp, should be better structured by putting elsewhere and import
def handleTranslation(text):

    words = text.split(' ')

    # Track all temp files, unlink when done
    temp_files = []
    video_paths = []

    for word in words:
        # Try db request for video
        try:
            video_file = FS.get(ObjectId(search_file_in_gridfs(word + "." + VIDEO_FORMAT)))
        except Exception:
            # Assume only error thrown by FS.get() is NoFileFound or something
            # print("'" + word + "' not found, adding to MongoDB")
            new_word = translate(word)
            video_paths.append(new_word)
            upload_to_gridfs(new_word, word + "." + VIDEO_FORMAT)
            continue
        # print("'" + word + "' found, retrieving from MongoDB")
        # print(type(video_file))
        temp_file = tempfile.NamedTemporaryFile(suffix = "." + VIDEO_FORMAT)
        temp_files.append(temp_file)
        video_paths.append(temp_file.name)
        temp_file.write(video_file.read())
        video_file.close()

    translated_video_path = stitch_videos(video_paths, text)    

    for temp_file in temp_files:
        temp_file.close()

    return translated_video_path





@app.route("/translate", methods=['GET'])
def get_translate():
    text = request.args.get("text", ValueError)
    if (text == ValueError or text == ""):
        return send_file(SERVER_ERROR_VIDEO, mimetype="video/" + VIDEO_FORMAT)
    
    text = text.translate(str.maketrans('', '', string.punctuation))

    video_file = None
    try:
        video_file = handleTranslation(text)
    except Exception:
        print(traceback.format_exc())
        video_file = SERVER_ERROR_VIDEO

    return send_file(video_file, mimetype="video/" + VIDEO_FORMAT)

            
app.run()
