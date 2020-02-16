from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def homepage(request):
    return render(request, "blog/home.html")


def rainbow_page(request):
    return render(request, "blog/rainbow.html")


def about_page(request):
    return render(request, "blog/about.html")


def test_page(request):
    return render(request, "blog/test.html")


def animation(request):
    return render(request, "blog/animation.html")


def resume(request):
    return render(request, "blog/resume.html")

