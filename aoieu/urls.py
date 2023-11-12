from django.urls import path, include
from django.views.generic import RedirectView
from . import views


urlpatterns = [
    path('', views.galaxies, name='galaxies'),
    path('logout/', views.logoutPage, name='logout'),

    path('galaxies/', views.galaxies, name='galaxies'),
    path('creategalaxy/', views.creategalaxy, name='creategalaxy'),
    path('updategalaxy/<str:pk>/', views.updategalaxy, name='updategalaxy'),
    path('deletegalaxy/<str:pk>/', views.deletegalaxy, name='deletegalaxy'),

    path('stars/', views.stars, name='stars'),
    path('createstar/', views.createstar, name='createstar'),
    path('updatestar/<str:pk>/', views.updatestar, name='updatestar'),
    path('deletestar/<str:pk>/', views.deletestar, name='deletestar'),

    path('planets/', views.planets, name='planets'),
    path('createplanet/', views.createplanet, name='createplanet'),
    path('updateplanet/<str:pk>/', views.updateplanet, name='updateplanet'),
    path('deleteplanet/<str:pk>/', views.deleteplanet, name='deleteplanet'),

    path('moons/', views.moons, name='moons'),
    path('createmoon/', views.createmoon, name='createmoon'),
    path('updatemoon/<str:pk>/', views.updatemoon, name='updatemoon'),
    path('deletemoon/<str:pk>/', views.deletemoon, name='deletemoon'),

    path('favicon.ico', RedirectView.as_view(url='/static/aoieu/img/favicon.ico')),

    path('api/moons/', views.MoonApiView.as_view()),
    path('api/planets/', views.PlanetApiView.as_view()),
    path('api/stars/', views.StarApiView.as_view()),
]