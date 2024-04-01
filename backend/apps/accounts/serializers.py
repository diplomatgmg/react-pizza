from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("email", "password", "confirm_password")

    def validate(self, data):
        confirm_password = data.pop("confirm_password")

        if data["password"] != confirm_password:
            raise serializers.ValidationError("Пароли не совпадают")

        validate_password(data["password"])
        return data

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CustomTokenObtainSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)
