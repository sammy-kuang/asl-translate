from bs4 import BeautifulSoup
import requests
import urllib.request
import os

SCRAPE_SOURCE = "https://www.signingsavvy.com/"
# imitate a legit browser
HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3600',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }

LETTER_DICTIONARY = {
    'a': 'https://www.signingsavvy.com/media2/mp4-ld/26/26710.mp4',
}

## Used internally for downloading a video given a valid signingsavvy URL
def query_url_for_video_online(url):
    req = requests.get(url)
    soup = BeautifulSoup(req.content, 'html.parser')

    un = soup.find(id="video-1").find("source").get("src")
    if un:
        return un


# Queries online for a URL that matches the word
# Returns a URL if it exists
# Returns None if you should spell it out
def query_for_word_online(word : str):
    word = word.lower()
    url = SCRAPE_SOURCE + "search/" + word
    req = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(req.content, 'html.parser')

    # unambiguous word, only one result
    try:
        out = query_url_for_video_online(url)
        return out
    except AttributeError:
        pass
    
    # ambiguous 
    try:
        for result in soup.find("div", {"class": "search_results"}).find("ul").find_all("a"):
           h = BeautifulSoup(str(result), 'html.parser')
           if h.text.lower() == word:
               new_url = SCRAPE_SOURCE + h.find("a").get('href')
               out = query_url_for_video_online(new_url)
               return out
    except AttributeError:
        pass

    return None

def download_video(url : str, relative_out : str):
    download = urllib.request.urlretrieve(url, os.path.join(os.path.dirname(os.path.realpath(__file__)), relative_out))
    return download[0]

# Should be called once prior to running backend   
def download_letters():
    for i in range(0, 26):
        print(i)
        l = 26710 + i
        url = 'https://www.signingsavvy.com/media2/mp4-ld/26/' + str(l) + '.mp4'
