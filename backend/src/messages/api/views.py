from rest_framework import viewsets
from ..models import Message
from .serializers import MessageModelSerializer

class MessagesViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageModelSerializer
    