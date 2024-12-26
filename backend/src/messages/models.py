from django.db import models

# Create your models here.
class Message(models.Model):
    title = models.CharField(max_length=50)
    message = models.TextField(max_length=200)
    date_sent = models.DateTimeField()
    date_received = models.DateTimeField()
    def __str__(self):
        return str(self.title)