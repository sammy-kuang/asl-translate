from flask import Flask, request, jsonify, send_file
from translate_service import translate

app = Flask(__name__)

@app.route("/test")
def main():
    body = {
        "data1" : "test"
    }
    return body


@app.route("/translate", methods=['GET'])
def get_translate():
    text = request.args.get("text", ValueError)
    if (text == ValueError):
        # TODO: handle error here
        return "error unhandled"

    cached_video_path = translate(text)

    # TODO video data
    return "TODO"
    # return send_file(video_path, mimetype='video/mp4', as_attachment=True)

@app.route("/get_test", methods=['GET'])
def get_test():
    # if request.method == 'GET':
    text = request.args.get("text", ValueError)
    if (text == ValueError):
        # TODO: handle error here
        return "error unhandled"

    result = translate(text)

    response_body = f"test : {result}"
    return jsonify({"response" : response_body})

if __name__ == "__main__":
    app.run()