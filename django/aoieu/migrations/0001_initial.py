# Generated by Django 4.2.6 on 2023-10-25 07:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Galaxy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=400, unique=True)),
                ('image', models.ImageField(blank=True, upload_to='static/aoieu/img/')),
                ('mass', models.FloatField()),
                ('diameter', models.FloatField()),
                ('created', models.TimeField(auto_now_add=True)),
                ('updated', models.TimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-name'],
            },
        ),
        migrations.CreateModel(
            name='Star',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=400, unique=True)),
                ('image', models.ImageField(blank=True, upload_to='static/aoieu/img/')),
                ('mass', models.FloatField()),
                ('diameter', models.FloatField()),
                ('created', models.TimeField(auto_now_add=True)),
                ('updated', models.TimeField(auto_now=True)),
                ('galaxy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aoieu.galaxy')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Planet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=400, unique=True)),
                ('image', models.ImageField(blank=True, upload_to='static/aoieu/img/')),
                ('mass', models.FloatField()),
                ('diameter', models.FloatField()),
                ('created', models.TimeField(auto_now_add=True)),
                ('updated', models.TimeField(auto_now=True)),
                ('star', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aoieu.star')),
            ],
            options={
                'ordering': ['-mass'],
            },
        ),
        migrations.CreateModel(
            name='Moon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=400, unique=True)),
                ('image', models.ImageField(blank=True, upload_to='static/aoieu/img/')),
                ('mass', models.FloatField()),
                ('diameter', models.FloatField()),
                ('created', models.TimeField(auto_now_add=True)),
                ('updated', models.TimeField(auto_now=True)),
                ('planet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aoieu.planet')),
            ],
            options={
                'ordering': ['-mass'],
            },
        ),
    ]
