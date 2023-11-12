from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Galaxy)
admin.site.register(models.Star)
admin.site.register(models.Planet)
admin.site.register(models.Moon)

