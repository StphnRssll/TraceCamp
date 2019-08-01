from django.urls import path
from nasacomments_app import views

urlpatterns = [
    path('home',views.view_home),
    path('picture_list',views.picture_list),
    path('create',views.create),
]