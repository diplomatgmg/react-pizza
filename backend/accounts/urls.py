from django.urls import path

from .views import UserCreateAPIView, BlacklistRefreshView, TokenObtainAPIView

urlpatterns = [
    path("register/", UserCreateAPIView.as_view(), name="register"),
    path("login/", TokenObtainAPIView.as_view(), name="login"),
    path("logout/", BlacklistRefreshView.as_view(), name="logout"),
]
