from django.test import TestCase, override_settings
from aoieu import models


#   test_settings = override_settings(
#       DATABASES = {
#       'default': {
#           'ENGINE': 'django.db.backends.postgresql_psycopg2',
#           'NAME': 'aoieu',
#           'USER': 'aoieu',
#           'PASSWORD': '123456789',
#           'HOST': 'postgres',
#           'PORT': '',
#           }
#       },
#   )
#       
#   @test_settings
class ObjModelTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        models.Galaxy.objects.create(name='A1', image='https://www.kasandbox.org/programming-images/avatars/marcimus.png', mass=1, diameter =1)
        galaxy = models.Galaxy.objects.get(id=1)
        models.Star.objects.create(name='A', image='https://www.kasandbox.org/programming-images/avatars/marcimus.png', mass=1, diameter =1, galaxy=galaxy)
        star = models.Star.objects.get(id=1)
        models.Planet.objects.create(name='A', image='https://www.kasandbox.org/programming-images/avatars/marcimus.png', mass=1, diameter =1, star=star)
        planet = models.Planet.objects.get(id=1)
        moon = models.Moon.objects.create(name='A', image='https://www.kasandbox.org/programming-images/avatars/marcimus.png', mass = 1, diameter=1, planet=planet)

    def test_galaxy_is_name(self):
        galaxy = models.Galaxy.objects.get(id=1)
        expected_object_name = galaxy.name
        self.assertEqual(expected_object_name,str(galaxy))

    def test_galaxy_name_label(self):
        galaxy = models.Galaxy.objects.get(id=1)
        max_length = galaxy._meta.get_field('name').max_length
        self.assertEqual(max_length,400)

    def test_star_is_name(self):
        star = models.Star.objects.get(id=1)
        expected_object_name = star.name
        self.assertEqual(expected_object_name,str(star))
    
    def test_star_name_label(self):
        star = models.Star.objects.get(id=1)
        max_length = star._meta.get_field('name').max_length
        self.assertEqual(max_length,400)

    def test_planet_is_name(self):
        planet = models.Planet.objects.get(id=1)
        expected_object_name = planet.name
        self.assertEqual(expected_object_name,str(planet))
    
    def test_planet_name_label(self):
        planet = models.Planet.objects.get(id=1)
        max_length = planet._meta.get_field('name').max_length
        self.assertEqual(max_length,400)

    def test_moon_is_name(self):
        moon = models.Moon.objects.get(id=1)
        expected_object_name = moon.name
        self.assertEqual(expected_object_name,str(moon))

    def test_moon_name_label(self):
        moon = models.Moon.objects.get(id=1)
        max_length = moon._meta.get_field('name').max_length
        self.assertEqual(max_length,400)