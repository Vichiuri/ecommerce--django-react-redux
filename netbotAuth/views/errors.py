from django.shortcuts import render, redirect


def error_403(request, exception):
    return redirect('netbotAuth:login')
