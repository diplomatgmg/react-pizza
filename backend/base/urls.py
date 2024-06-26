from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("__debug__/", include("debug_toolbar.urls")),
    path("api/", include("apps.pizza.urls")),
    path("api/", include("apps.accounts.urls")),
    path("api/", include("apps.cart.urls")),
]
