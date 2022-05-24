from django.db import models

# Create your models here.
class LeetCode(models.Model):
    questionName = models.CharField(max_length=100)
    video = models.URLField(max_length=200)
    question = models.URLField(max_length=200)
    explanation = models.CharField(max_length=1000)