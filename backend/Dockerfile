FROM python:3.12-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /code/backend

COPY . .
RUN pip install --no-cache-dir -r requirements.txt
