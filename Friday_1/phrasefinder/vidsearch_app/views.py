from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# from https://pypi.org/project/youtube-data-api/
from youtube_api import YouTubeDataAPI
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
# Helper Function - Accept Video ID and Key Words Return Searched Data
def search_transcript(vid_id, words):
    transcript = YouTubeTranscriptApi.get_transcript(vid_id)
    
    found_lines = []
    words = [word.upper() for word in words]
    for line in transcript:
        line["start"] = int(line["start"])
        found_words = []
        found_words = list(filter(lambda word:line["text"].upper().find(word)!=-1,words))
        if(found_words):
            found_lines.append({"found_words": found_words, "line": line})
    
    return found_lines

# Views
def cap_search(request):
    # qc = request.GET.get("qc") # caption query
    vid_url = request.GET.get("vid_url") # user's copypasted video url
    key_words = request.GET.get("key_words").split(" ")
    vid_id = vid_url.split("v=",1)[1] # get id from url
    found_lines = search_transcript(vid_id, key_words)
    return JsonResponse(found_lines, safe=False, json_dumps_params={'indent': 2})


def main(request):
    vid_url = request.GET.get("vid_url")
    vid_url = vid_url.replace('&t=1s', '')
    vid_id = vid_url.split("=",1)[1]
    key_words = request.GET.get("key_words").split(" ")
    found_lines = search_transcript(vid_id, key_words)
    return render(request, 'results.html', context = {"found_lines": found_lines, "base_id": vid_id} )


# lines = [block['text'] for block in transcript]

    """big_text = []
    for line in lines:
        big_text.append()"""



