from rest_framework import generics

from .models import Pizza
from .serializers import PizzaSerializer


class PizzaListAPIView(generics.ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer


class PizzaDetailAPIView(generics.RetrieveAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
