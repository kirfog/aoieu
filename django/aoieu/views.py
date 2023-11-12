from django.shortcuts import render, redirect
from django.db.models import Q
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from . import models
from . import forms

from . import serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

class MoonApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        moons = models.Moon.objects.all()
        serializer = serializers.MoonSerializer(moons, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
	
class PlanetApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        moons = models.Planet.objects.all()
        serializer = serializers.MoonSerializer(moons, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
	
class StarApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        moons = models.Star.objects.all()
        serializer = serializers.MoonSerializer(moons, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


def logoutPage(request):
	logout(request)
	return redirect('galaxies')

def galaxies(request):
	context = {'galaxies': models.Galaxy.objects.all()}
	return render(request, 'galaxies.html', context)

@login_required(login_url='/admin/login/')
def creategalaxy(request):
	form = forms.GalaxyForm()
	if request.method == 'POST':
		form = forms.GalaxyForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return redirect('galaxies')
	context = {'form' : form }
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def updategalaxy(request, pk):
	galaxy = models.Galaxy.objects.get(name=str(pk))
	form = forms.GalaxyForm(instance=galaxy)
	if request.method == 'POST':
		form = forms.GalaxyForm(request.POST, request.FILES, instance=galaxy)
		if form.is_valid():
			form.save()
			return redirect('galaxies')
	context = {'form' : form, 'obj' : galaxy}
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def deletegalaxy(request, pk):
	galaxy = models.Galaxy.objects.get(name=str(pk))
	if request.method == 'POST':
		galaxy.delete()
		return redirect('galaxies')
	context = {'obj' : galaxy}
	return render(request, 'formdelete.html', context)


def stars(request):
	q = request.GET.get('galaxy')
	if q != None:
		stars = models.Star.objects.filter(galaxy__name=q)
	else:
		stars = models.Star.objects.all()
	galaxies = models.Galaxy.objects.all()
	context = {'stars': stars , 'galaxies': galaxies}
	return render(request, 'stars.html', context)

@login_required(login_url='/admin/login/')
def createstar(request):
	form = forms.StarForm()
	if request.method == 'POST':
		form = forms.StarForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return redirect('stars')
	context = {'form' : form }
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def updatestar(request, pk):
	star = models.Star.objects.get(name=str(pk))
	form = forms.StarForm(instance=star)
	if request.method == 'POST':
		form = forms.StarForm(request.POST, request.FILES, instance=star)
		if form.is_valid():
			form.save()
			return redirect('stars')
	context = {'form' : form, 'obj' : star}
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def deletestar(request, pk):
	star = models.Star.objects.get(name=str(pk))
	if request.method == 'POST':
		star.delete()
		return redirect('stars')
	context = {'obj' : star}
	return render(request, 'formdelete.html', context)


def planets(request):
	star = request.GET.get('star')
	planet = request.GET.get('planet')
	if star != None and planet != None:
		planets = models.Planet.objects.filter(
			Q(star__name_contains = star ) &
			Q(name_contains = planet )
			)
	elif star != None:
		planets = models.Planet.objects.filter(
			Q(star__name__contains = star)
			)
	elif planet != None:
		planets = models.Planet.objects.filter(
			Q(name__contains = planet)
			)
	else:
		planets = models.Planet.objects.all()
	planets_count = planets.count()
	stars = models.Star.objects.all()
	context = {'planets': planets, 'stars': stars, 'planets_count': planets_count}
	return render(request, 'planets.html', context)

@login_required(login_url='/admin/login/')
def createplanet(request):
	form = forms.PlanetForm()
	if request.method == 'POST':
		form = forms.PlanetForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return redirect('planets')
	context = {'form' : form }
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def updateplanet(request, pk):
	planet = models.Planet.objects.get(name=str(pk))
	form = forms.PlanetForm(instance=planet)
	if request.method == 'POST':
		form = forms.PlanetForm(request.POST, request.FILES, instance=planet)
		if form.is_valid():
			form.save()
			return redirect('planets')
	context = {'form' : form, 'obj' : planet}
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def deleteplanet(request, pk):
	planet = models.Planet.objects.get(name=str(pk))
	if request.method == 'POST':
		planet.delete()
		return redirect('planets')
	context = {'obj' : planet}
	return render(request, 'formdelete.html', context)



def moons(request):
	planet = request.GET.get('planet')
	moon = request.GET.get('moon')
	if planet != None and moon != None:
		moons = models.Moon.objects.filter(
			Q(planet__name__contains = planet) &
			Q(name__contains = moon)
			)
	elif planet != None:
		moons = models.Moon.objects.filter(
			Q(planet__name__contains = planet)
			)
	elif moon != None:
		moons = models.Moon.objects.filter(
			Q(name__contains = moon)
			)
	else:
		moons = models.Moon.objects.all()
	moons_count = moons.count()
	planets = models.Planet.objects.all()
	context = {'moons': moons, 'planets': planets, 'moons_count': moons_count}
	return render(request, 'moons.html', context)

@login_required(login_url='/admin/login/')
def createmoon(request):
	form = forms.MoonForm()
	if request.method == 'POST':
		form = forms.MoonForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return redirect('moons')
	context = {'form' : form }
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def updatemoon(request, pk):
	moon = models.Moon.objects.get(name=str(pk))
	form = forms.MoonForm(instance=moon)
	if request.method == 'POST':
		form = forms.MoonForm(request.POST, request.FILES, instance=moon)
		if form.is_valid():
			form.save()
			return redirect('moons')
	context = {'form' : form, 'obj' : moon}
	return render(request, 'form.html', context)

@login_required(login_url='/admin/login/')
def deletemoon(request, pk):
	moon = models.Moon.objects.get(name=str(pk))
	if request.method == 'POST':
		moon.delete()
		return redirect('moons')
	context = {'obj' : moon}
	return render(request, 'formdelete.html', context)
