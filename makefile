test:
	pip install -r ./django/requirements.txt
	python ./django/manage.py test django
run:
	pip install -r ./django/requirements.txt
	python ./django/manage.py runserver