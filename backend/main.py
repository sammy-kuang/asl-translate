import sys
import traceback
from flask import Flask, request, jsonify, send_file
from translate_service import translate, VIDEO_FORMAT, SERVER_ERROR_VIDEO
from scraper import download_deps
from bson.objectid import ObjectId

app = Flask(__name__)

# Make request with `/translate?text=`
@app.route("/translate", methods=['GET'])
def get_translate():
    text = request.args.get("text", ValueError)
    if (text == ValueError):
        return send_file(SERVER_ERROR_VIDEO, mimetype="video/" + VIDEO_FORMAT)
    
    cached_video_path = None
    try:
        cached_video_path = translate(text)
    except Exception:
        print(traceback.format_exc())
        cached_video_path = SERVER_ERROR_VIDEO


    return send_file(cached_video_path, mimetype="video/" + VIDEO_FORMAT)
    
@app.route("/dummy", methods=['GET'])
def dummy():
    from mongo import FS, search_file_in_gridfs
    video_file = FS.get(ObjectId(search_file_in_gridfs("0.mp4")))
    return send_file(video_file, mimetype="video/mp4")

if __name__ == "__main__":
# run script with --download-deps to download the numbers and letters for ASL
    if len(sys.argv) >= 2:
        if sys.argv[1] == "--download-deps":
            download_deps()
            
    app.run()