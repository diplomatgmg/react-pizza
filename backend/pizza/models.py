from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name


class Pizza(models.Model):
    name = models.CharField(max_length=16, unique=True)
    price = models.IntegerField()
    ingredients = models.ManyToManyField(Ingredient)

    def __str__(self):
        return self.name
