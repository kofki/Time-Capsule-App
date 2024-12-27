from rest_framework import serializers
from ..models import Message


class MessageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ("id", "title", "message", "date_sent", "date_received")
