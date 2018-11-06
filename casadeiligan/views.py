from django.shortcuts import render

def index(request):
    return render(request, "home/index.html")

def signUp(request):
    return render(request, "user-auth/signup.html")

def signIn(request):
    return render(request, "user-auth/signin.html")