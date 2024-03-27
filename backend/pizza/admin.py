from django.contrib import admin
from .models import Ingredient, Pizza


@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'display_ingredients')
    search_fields = ('name',)
    filter_horizontal = ('ingredients',)

    def display_ingredients(self, obj):
        return ", ".join([ingredient.name for ingredient in obj.ingredients.all()])

    display_ingredients.short_description = 'Ingredients'
