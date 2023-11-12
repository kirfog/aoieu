from rest_framework import serializers
from . import models

class MoonSerializer(serializers.ModelSerializer):
    radius = serializers.CharField(source='diameter')
    class Meta:
        model = models.Moon
        fields = ["name", "image", "mass", "radius"]

class PlanetSerializer(serializers.ModelSerializer):
    radius = serializers.CharField(source='diameter')
    class Meta:
        model = models.Planet
        fields = ["name", "image", "mass", "radius"]

class StarSerializer(serializers.ModelSerializer):
    radius = serializers.CharField(source='diameter')
    class Meta:
        model = models.Star
        fields = ["name", "image", "mass", "radius"]