from django.shortcuts import render
from django.views.generic.edit import CreateView
from blog_app.models import Post

# Create your views here.
class PostCreate(CreateView):
    model = Post
    fields = ['title', 'body']