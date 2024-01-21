from flask import Flask, request, jsonify, send_file
from translate_service import translate, VIDEO_FORMAT

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
    app.run()