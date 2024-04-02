from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Cart, CartItem
from .serializers import CartSerializer
from ..pizza.models import Pizza


class CartDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def get_cart(self, user):
        cart, created = Cart.objects.get_or_create(user=user)
        return cart

    def get(self, request):
        cart = self.get_cart(request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def post(self, request):
        cart = self.get_cart(request.user)
        pizza_id = request.data.get("pizza")

        try:
            pizza = Pizza.objects.get(pk=pizza_id)
        except Pizza.DoesNotExist:
            return Response(
                {"error": "Pizza not found"}, status=status.HTTP_404_NOT_FOUND
            )

        cart_item, created = CartItem.objects.get_or_create(cart=cart, pizza=pizza)
        if not created:
            cart_item.quantity += 1
            cart_item.save()

        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def delete(self, request):
        cart = self.get_cart(request.user)
        pizza_id = request.data.get("pizza")

        try:
            pizza = Pizza.objects.get(pk=pizza_id)
        except Pizza.DoesNotExist:
            return Response(
                {"error": "Pizza not found"}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            cart_item = CartItem.objects.get(cart=cart, pizza=pizza)
            cart_item.delete()
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Item not found in cart"}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = CartSerializer(cart)
        return Response(serializer.data)
