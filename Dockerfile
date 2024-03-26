FROM python:3.12-alpine

COPY backend/requirements.txt /temp/backend/requirements.txt

COPY backend /backend
WORKDIR backend
EXPOSE 8000

RUN pip install -r /temp/backend/requirements.txt

RUN adduser --disabled-password admin
USER admin
