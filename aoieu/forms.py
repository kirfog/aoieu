from django.forms import ModelForm
#from django.core.exceptions import ValidationError
from . import models

class GalaxyForm(ModelForm):
#    def clean_name(self):
#        data = self.cleaned_data['name']
#        if not str(data)[0].isalpha():
#            raise ValidationError('Invalid name, should contain alpha characters only')
#        return data

    class Meta:
        model = models.Galaxy
        fields = '__all__'
        
class StarForm(ModelForm):
    class Meta:
        model = models.Star
        fields = '__all__'

class PlanetForm(ModelForm):
    class Meta:
        model = models.Planet
        fields = '__all__'

class MoonForm(ModelForm):
    class Meta:
        model = models.Moon
        fields = '__all__'