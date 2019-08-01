from django.shortcuts import render
from django.http import HttpResponse
from nasacomments_app.models import Comment
from datetime import datetime, date, time, timedelta

# Create your views here.

def view_home(request):
    return render(request, 'homepage.html')

def picture_list(request):
    
    date = datetime.now()
    for num in range(2,10):
        date = date - timedelta(days = num)
        date_str = f'{date.year}-{date.month}-{date.day}'
        url = f"https://api.nasa.gov/planetary/apod?api_key=1NueOhCvDEbzaopMmweCQAdXizbD9dYvubUtapY8&date={date_str}"
        hd_url = request.get(url).json()["url"]
        url.append(hd_url)
    print(url)
    return render(request,'picture_list.html', context = {"urls": url})

def create(request):
    if request.method == "GET":
        return render(request, 'form.html')
    elif request.method == "POST":
        Comment.objects.create(
            comment = request.POST.get('comment','Default Comment'),
            rating = request.POST.get('rating','')
        )
        return HttpResponse("Created")
