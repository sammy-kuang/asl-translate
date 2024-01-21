import os
import ffmpeg

from scraper import query_for_word_online, download_video, VIDEO_DIR


# Returns list of path(s) to mp4 files that either ARE the word or SPELL OUT the word
# Fail state is an empty array
def get_word(word : str) -> []:
    word = word.lower()
    out = []
    check_path = os.path.join(VIDEO_DIR, word + ".mp4")

    if os.path.exists(check_path):
        out.append(check_path)
        return out

    url = query_for_word_online(word)

    if url is not None:
        out.append(download_video(url, word + ".mp4"))
    else:
        for letter in word:
            out.append(os.path.join(VIDEO_DIR, letter.lower() + ".mp4"))
    return out
        

# FFmpeg constants
VIDEO_FORMAT = "mp4"
CACHE_DIR = os.path.join(os.path.dirname(os.path.realpath(__file__)), "cache")
# refer to https://ffmpeg.org/ffmpeg.html for output flags
FFMPEG_OUTPUT = "error"

# Stitches videos with provided url links
# Returns path to stitched video in ./cache
def stitch_videos(paths, name):
    inputs = []
    for path in paths:
        inputs.append(ffmpeg.input(path))

    # Unpack inputs and concatenate them
    stitched = ffmpeg.concat(*inputs)
    # Specify output and run ffmpeg process

    output_path = os.path.join(CACHE_DIR, name + "." + VIDEO_FORMAT)
    ffmpeg.output(stitched, output_path, loglevel = FFMPEG_OUTPUT).run(overwrite_output = True)
    return output_path


# Adds the text and stitches spelling letters if needed
# Returns path of modified video
def transform_video(paths, name):
    path = paths[0]
    if (len(paths) > 1):
        path = stitch_videos(paths, name)

    #label_video(path) here
    return path


# Entry to translate, returns a path to the cached video
def translate(text):
    words = text.split(' ')

    cache_video_paths = []
    for word in words:
        word_paths = get_word(word)
        word_cache_path = transform_video(word_paths, word)
        cache_video_paths.append(word_cache_path)

    translated_video_path = cache_video_paths[0]

    if len(cache_video_paths) > 1:
        translated_video_path = stitch_videos(cache_video_paths, text)

    return translated_video_path

