from django.shortcuts import render
from rest_framework import generics, status
from .serializers import LeetCodeSerializer
from .models import LeetCode
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class LeetCodeView(generics.CreateAPIView):
    queryset = LeetCode.objects.all()
    serializer_class = LeetCodeSerializer
