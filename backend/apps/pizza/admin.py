from django.contrib import admin
from .models import Ingredient, Category, Pizza


@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "price",
    )
    search_fields = ("name",)
    filter_horizontal = ("ingredients", "categories")
    ordering = ("id",)

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related("ingredients")
