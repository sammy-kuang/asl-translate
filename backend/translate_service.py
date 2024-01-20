import os

from scraper import query_for_word_online
from scraper import download_video

# Returns path / paths to mp4 files that either ARE the word or SPELL OUT the word
# Fail state is an empty array
def get_word(word : str) -> []:
    out = []
    if os.path.exists(os.path.join(os.path.realpath(__file__), word + ".mp4")):
        url = query_for_word_online(word)

        if url is None:
            pass # TODO: Spell out word
        else:
            out.append(download_video(url, "videos/" + word + ".mp4"))

    return out