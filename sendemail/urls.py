from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from . import views

from .views import emailView, successView

urlpatterns = [
    path('email/', emailView, name='email'),
    path('success/', successView, name='success'),
    url(r'^', views.FrontendAppView.as_view()),
]
