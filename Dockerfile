FROM python:3.12-slim-bookworm AS builder
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apt update && apt -y install make libpq-dev gcc
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && pip install --no-cache-dir -r requirements.txt 
COPY . .
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]