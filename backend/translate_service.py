import os

from scraper import query_for_word_online, download_video, get_video_directory

import ffmpeg


# Returns list of path(s) to mp4 files that either ARE the word or SPELL OUT the word
# Fail state is an empty array
def get_word(word : str) -> []:
    word = word.lower()
    out = []
<<<<<<< HEAD
    check_path = os.path.join(get_video_directory, word + ".mp4")
    
    # TODO also check if in cache
=======
    check_path = os.path.join(get_video_directory(), word + ".mp4")

>>>>>>> de147151b05d1cad77fbe060b2af6f5a07b040bd
    if os.path.exists(check_path):
        out.append(check_path)
        return out

    url = query_for_word_online(word)

    if url is not None:
        out.append(download_video(url, + word + ".mp4"))
    else:
        for letter in word:
            out.append(os.path.join(get_video_directory(), letter.lower() + ".mp4"))
    return out
        

# ffmpeg options
VIDEO_FORMAT = "mp4"
CACHE_DIR = "cache/"

# Stitches videos with provided url links
# Returns path to stitched video in ./cache
def stitch_videos(paths, name):
    inputs = []
    for path in paths:
        inputs.append(ffmpeg.input(path))

    # unpack inputs and concatenate them
    stitched = ffmpeg.concat(*inputs)
    # specify output and run ffmpeg process

    output_path = CACHE_DIR + name + "." + VIDEO_FORMAT
    ffmpeg.output(stitched, output_path, loglevel = "quiet").run(overwrite_output = True)
    return output_path


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
<<<<<<< HEAD
    return translated_video_path

stitch_videos(["videos/A.mp4", "videos/B.mp4"], "test")
=======
    return translated_video_path
>>>>>>> de147151b05d1cad77fbe060b2af6f5a07b040bd
