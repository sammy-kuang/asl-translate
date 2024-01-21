from flask import Flask, request, jsonify, send_file
import sys
from scraper import download_deps
# from translate_service import translate

app = Flask(__name__)

# @app.route("/translate", methods=['GET'])
# def get_translate():
#     text = request.args.get("text", ValueError)
#     if (text == ValueError):
#         # TODO: handle error here
#         return "error unhandled"

#     cached_video_path = translate(text)

#     # TODO video data
#     return "TODO"
#     # return send_file(video_path, mimetype='video/mp4', as_attachment=True)

@app.route("/test", methods=['GET'])
def test():
    text = request.args.get("text", ValueError)
    if (text == ValueError):
        # TODO: handle error here
        return "error unhandled"

    # return send_file(video_path, mimetype='video/mp4', as_attachment=True)
    return send_file("videos/" + text + ".mp4", mimetype="video/mp4")
    

if __name__ == "__main__":
    # run script with --download-deps to download the numbers and letters for ASL
    if len(sys.argv) >= 2:
        if sys.argv[1] == "--download-deps":
            download_deps()
            
    app.run()