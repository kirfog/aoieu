from django.db import models
from django.core.validators import RegexValidator

alpha = RegexValidator(r'^[a-zA-Z]+', 'Name must begin with alpha character')

class Galaxy(models.Model):
	def __str__(self):
		return self.name
	name = models.CharField(max_length = 400, db_index = True, unique=True, validators=[alpha])
	image = models.ImageField(blank=True, upload_to ='galaxies', height_field=None, width_field=None)
	mass = models.FloatField()
	diameter = models.FloatField()
	created = models.TimeField(auto_now_add=True)
	updated = models.TimeField(auto_now=True)
	class Meta:
		ordering = ['-name']

class Star(models.Model):
	def __str__(self):
		return self.name
	name = models.CharField(max_length = 400, db_index = True, unique=True, validators=[alpha])
	image = models.ImageField(blank=True, upload_to ='stars', height_field=None, width_field=None)
	mass = models.FloatField()
	diameter = models.FloatField()
	galaxy = models.ForeignKey(Galaxy, on_delete=models.CASCADE)
	created = models.TimeField(auto_now_add=True)
	updated = models.TimeField(auto_now=True)
	class Meta:
		ordering = ['name']

class Planet(models.Model):
	def __str__(self):
		return self.name
	name = models.CharField(max_length = 400, db_index = True, unique=True, validators=[alpha])
	image = models.ImageField(blank=True, upload_to ='planets', height_field=None, width_field=None)
	mass = models.FloatField()
	diameter = models.FloatField()
	star = models.ForeignKey(Star, on_delete=models.CASCADE)
	created = models.TimeField(auto_now_add=True)
	updated = models.TimeField(auto_now=True)
	class Meta:
		ordering = ['-mass']

class Moon(models.Model):
	def __str__(self):
		return self.name
	name = models.CharField(max_length = 400, db_index = True, unique=True, validators=[alpha])
	image = models.ImageField(blank=True, upload_to ='moons', height_field=None, width_field=None)
	mass = models.FloatField()
	diameter = models.FloatField()
	planet = models.ForeignKey(Planet, on_delete=models.CASCADE)
	created = models.TimeField(auto_now_add=True)
	updated = models.TimeField(auto_now=True)
	class Meta:
		ordering = ['-mass']