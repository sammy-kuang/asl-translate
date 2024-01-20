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
        

# TODO entry to translate, returns a 
def translate(text):
    words = text.split(' ')

    video_urls = []
    for word in words:
        video = get_word(word)

    return videos
