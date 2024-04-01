from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import (
    UserCreateSerializer,
    CustomTokenObtainSerializer,
)


class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = (AllowAny,)


class TokenObtainAPIView(APIView):
    serializer_class = CustomTokenObtainSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if not user:
            return Response(
                {"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        return Response(
            {
                "email": user.email,
                "tokens": {
                    "access": access_token,
                    "refresh": str(refresh),
                },
            }
        )


class BlacklistRefreshView(APIView):

    @staticmethod
    def post(request):
        refresh_token = request.data.get("refresh")
        if refresh_token:
            RefreshToken(refresh_token).blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        else:
            return Response(
                {"error": "Refresh or/and access token not provided."},
                status=status.HTTP_400_BAD_REQUEST,
            )
