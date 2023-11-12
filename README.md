
### Use

* clone

```
clone git@github.com:kirfog/aoieu.git
```
* install

```
cd aoieu
python -m venv venv
pip install -r .\requirements.txt
```
* run

```
.\venv\Scripts\activate
python .\manage.py runserver

```

* [Django](https://github.com/django/django)


* PostreSQL
```
pip install "psycopg[binary]"
python manage.py dumpdata > ../datadump.json

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'aoieu',
        'USER': 'aoieu',
        'PASSWORD': '123456789',
        'HOST': 'localhost',
        'PORT': '',
    }

- delete migrations

python manage.py makemigrations
python manage.py migrate

python manage.py shell
from django.contrib.contenttypes.models import ContentType
ContentType.objects.all().delete()

- notepad save datadump.json UTF8

python manage.py loaddata ../datadump.json

```