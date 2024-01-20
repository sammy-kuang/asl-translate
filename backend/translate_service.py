import os

from scraper import query_for_word_online
from scraper import download_video

import ffmpeg

def get_video_directory() -> str:
    return os.path.dirname(os.path.realpath(__file__))

# Returns list of path(s) to mp4 files that either ARE the word or SPELL OUT the word
# Fail state is an empty array
def get_word(word : str) -> []:
    out = []
    check_path = os.path.join(get_video_directory, word + ".mp4")

    if os.path.exists(check_path):
        out.append(check_path)
        return out

    url = query_for_word_online(word)

    if url is not None:
        out.append(download_video(url, "videos/" + word + ".mp4"))
    else:
        for letter in word.split():
            out.append(os.path.join(get_video_directory(), "videos/" + letter.upper() + ".mp4"))
    return out
        

# ffmpeg options
VIDEO_FORMAT = "mp4"
# preserve input
OUTPUT_OPTIONS_PRESERVE = {'c:v' : 'copy', 'c:a' : 'copy'}
# cache directory
CACHE_DIR = "cache/"

# Stitches videos with provided url links
# Returns path to stitched video in ./cache
def stitch_videos(paths, name):
    inputs = []
    for path in paths:
        inputs.append(ffmpeg.input(path))

    # unpack inputs and specify same video and audio streams
    stitched = ffmpeg.concat(*inputs, v = 1, a = 1)

    stitched.output(stitched, CACHE_DIR + name, **OUTPUT_OPTIONS_PRESERVE).run()

    



# Adds the text and stitches spelling letters if needed
# Returns path of modified video
def transform_video(paths, name):
    path = paths[0]
    if (len(paths) > 1):
        path = stitch_videos(paths)

    #label_video(path) here
    return path


# TODO entry to translate, returns a 
def translate(text):
    words = text.split(' ')

    cache_video_paths = []
    for word in words:
        word_paths = get_word(word)
        word_cache_path = transform_video(word_paths, word)
        cache_video_paths.append(word_cache_path)

    translated_video_path = stitch_videos(cache_video_paths)
    return translated_video_path



stitch_videos(["videos/A.mp4", "videos/B.mp4"], "test")