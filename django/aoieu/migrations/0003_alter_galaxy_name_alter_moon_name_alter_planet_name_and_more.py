# Generated by Django 4.2.6 on 2023-10-26 11:48

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aoieu', '0002_alter_galaxy_name_alter_moon_name_alter_planet_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galaxy',
            name='name',
            field=models.CharField(db_index=True, max_length=400, unique=True, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+', 'Name must begin with alpha character')]),
        ),
        migrations.AlterField(
            model_name='moon',
            name='name',
            field=models.CharField(db_index=True, max_length=400, unique=True, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+', 'Name must begin with alpha character')]),
        ),
        migrations.AlterField(
            model_name='planet',
            name='name',
            field=models.CharField(db_index=True, max_length=400, unique=True, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+', 'Name must begin with alpha character')]),
        ),
        migrations.AlterField(
            model_name='star',
            name='name',
            field=models.CharField(db_index=True, max_length=400, unique=True, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+', 'Name must begin with alpha character')]),
        ),
    ]
