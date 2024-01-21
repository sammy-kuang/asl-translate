import sys
from flask import Flask, request, jsonify, send_file
from translate_service import translate, VIDEO_FORMAT
from scraper import download_deps

app = Flask(__name__)


@app.route("/translate", methods=['GET'])
def get_translate():
    text = request.args.get("text", ValueError)
    if (text == ValueError):
        # TODO: handle error here
        return "error unhandled"

    cached_video_path = translate(text)

    return send_file(cached_video_path, mimetype="video/" + VIDEO_FORMAT)
    

if __name__ == "__main__":
    # run script with --download-deps to download the numbers and letters for ASL
    if len(sys.argv) >= 2:
        if sys.argv[1] == "--download-deps":
            download_deps()
            
    app.run()