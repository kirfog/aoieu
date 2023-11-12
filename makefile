test:
	pip install -r ./requirements.txt
	python ./manage.py test
run:
	pip install -r ./requirements.txt
	python ./manage.py runserver