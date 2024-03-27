from django.urls import path

from .views import PizzaListAPIView

urlpatterns = [
    path('pizzas/', PizzaListAPIView.as_view(), name='pizza-list'),
]
