from django.urls import path

from .views import PizzaListAPIView, PizzaDetailAPIView

urlpatterns = [
    path('pizzas/', PizzaListAPIView.as_view(), name='pizza-list'),
    path('pizzas/<int:pk>/', PizzaDetailAPIView.as_view(), name='pizza-detail'),
]
