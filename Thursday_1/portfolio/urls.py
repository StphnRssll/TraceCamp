from django.urls import path
import blog_app.views as views

urlpatterns = [
    path('create',views.PostCreate)
]