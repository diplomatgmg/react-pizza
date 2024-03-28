from django.urls import path

from .views import PizzaListAPIView, CategoryListAPIView

urlpatterns = [
    path('pizzas/', PizzaListAPIView.as_view(), name='pizza-list'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
]
