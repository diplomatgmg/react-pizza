FROM python:3.12-alpine

COPY ./ /backend
WORKDIR /backend

EXPOSE 8000

RUN pip install --no-cache-dir -r requirements.txt

RUN adduser --disabled-password admin
USER admin

