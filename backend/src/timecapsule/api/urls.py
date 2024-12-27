from rest_framework import routers
from .views import MessagesViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r"message", MessagesViewSet)

urlpatterns = [path("", include(router.urls))]
