from django.urls import path
from .views import LeetCodeView

urlpatterns = [
    path('', LeetCodeView.as_view())
]