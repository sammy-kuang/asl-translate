import ffmpeg
import query_for_word_online from scraper

# Returns list of path(s) to mp4 files that either ARE the word or SPELL OUT the word
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
        

# TODO entry to translate, returns a 
def translate(text):
    words = text.split(' ')

    video_urls = []
    for word in words:
        video = get_word(word)





    return videos


