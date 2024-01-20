import ffmpeg



# TODO entry to translate, final return
def translate(text):
    words = text.split(' ')

    videos = []
    for word in words:
        video = find_video(word)
        videos.append(video)






    return videos


