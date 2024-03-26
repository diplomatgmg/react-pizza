FROM python:3.12-alpine

RUN adduser -D user

WORKDIR /backend
COPY ./ /backend

EXPOSE 8000

RUN apk add postgresql-client build-base postgresql-dev

RUN pip install --no-cache-dir -r requirements.txt

USER user
