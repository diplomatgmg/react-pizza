from rest_framework import serializers
from .models import Ingredient, Pizza


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']


class PizzaSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)

    class Meta:
        model = Pizza
        fields = ['id', 'name', 'price', 'ingredients', 'image_url']
