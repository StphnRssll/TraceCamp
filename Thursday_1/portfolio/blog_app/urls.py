from django.urls import path
import views as views

urlpatterns = [
    path('create',views.PostCreate.as_view())
]