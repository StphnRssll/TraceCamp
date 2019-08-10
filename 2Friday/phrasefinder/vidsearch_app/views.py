from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# importing BS4 and requests for search result scraper
from bs4 import BeautifulSoup as bs
import requests
# from https://pypi.org/project/youtube-transcript-api/
from youtube_transcript_api import YouTubeTranscriptApi

"""
def vid_search(request):
    s = request.GET.get("qv") # video query
    api_key = 'AIzaSyDEasRK7r01XqeJ4PwBnLSKVU5Ik_vQM1o'
    yt = YouTubeDataAPI(api_key)
    data = yt.search(s)
    vid_id = data[0]['video_id'] 
    return JsonResponse(vid_id, safe=False, json_dumps_params={'indent': 2})
"""

# Helper function - gets video url and returns id
def getID(vid_url):
    #vid_url = vid_url.replace('&t=1s', '')
    vid_id = vid_url.split("=")[1]
    return(vid_id)


# Helper Function - Takes a video's id & a caption query -> returns found_lines
def search_transcript(vid_id, words):
    transcript = YouTubeTranscriptApi.get_transcript(vid_id)
    found_lines = []
    words = [word.upper() for word in words]
    for line in transcript: # vvv Bek Magic vvv
        line["start"] = int(line["start"]) # "start" is a string respresing the start time. this makes start an int.
        found_words = [] 
        found_words = list(filter(lambda word:line["text"].upper().find(word)!=-1,words)) # 
        if(found_words):
            found_lines.append({"found_words": found_words, "line": line}) # if the word is found in the line, catalogue the line
    
    return found_lines # found_lines contains an entry for every line a word is found on. 
    # "found_words" contains each cap_keyword found on the line and "line" is a json type thing i believe


# Helper function - takes video search query and returns URL's of top results
def vid_search(query_string):
    base = "https://www.youtube.com/results?search_query="
    #query_string = str(vid_query)#.replace(" ","+")
    r = requests.get(base+query_string)
    page = r.text
    soup=bs(page,'html.parser')

    vids = soup.findAll('a',attrs={'class':'yt-uix-tile-link'})
    top_vid_ids = []
    top_vid_titles = []
    vid_id = ""

    for v in vids:
        if("v=" in str(v)):
            vid_id = str(v['href'])
            vid_id = getID(vid_id)
            title = str(v['title'])
            top_vid_ids.append(vid_id)
            top_vid_titles.append(title)
    return [top_vid_ids,top_vid_titles]

# Get Thumbnail from page of search results
def getThumbnails(top_vid_ids):
    top_vid_thumbnails = []
    for vid_id in top_vid_ids:
        thumbnail_str = f'https://i.ytimg.com/vi/{vid_id}/hqdefault.jpg'
        top_vid_thumbnails.append(thumbnail_str)

    return top_vid_thumbnails

def main(request): #old main that works
    vid_id = getID(request)
    key_words = request.GET.get("key_words").split(" ")
    found_lines = search_transcript(vid_id, key_words)
    return render(request, 'results.html', context = {"found_lines": found_lines, "base_id": vid_id} ) 
    # render is a function that creates a lot of html given 'results.html' and subs in the parameters from "context" whenever they are called with {{}}

# new main that does not work
def newMain(request):
    vid_query = str(request.GET.get("vid_query"))
    [top_vid_ids,top_vid_titles] = vid_search(vid_query)
    top_vid_thumbnails = getThumbnails(top_vid_ids)

    # query_string = vid_search(vid_query)
    return render(request, 'newResults.html', context = {"top_vid_ids": top_vid_ids, "top_vid_thumbnails": top_vid_thumbnails, "top_vid_titles": top_vid_titles})
