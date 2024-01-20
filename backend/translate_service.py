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
        

# Stitches videos with provided url links
# Returns path to stitched video in ./cache
def stitch_videos(path)



# Adds the text and stitches spelling letters if needed
# Returns path of modified video
def transform_video(paths, word)
    path = paths[0]
    if (len(paths) > 1)
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

