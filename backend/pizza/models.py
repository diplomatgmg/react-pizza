from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name

    def clean(self):
        self.name = self.name.lower()


class Pizza(models.Model):
    name = models.CharField(max_length=32, unique=True)
    price = models.IntegerField()
    ingredients = models.ManyToManyField(Ingredient)
    image_url = models.URLField()

    def __str__(self):
        return self.name
