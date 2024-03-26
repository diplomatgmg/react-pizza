FROM node:21.6.1-alpine

WORKDIR /code/frontend

ENV PATH /code/frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

EXPOSE 3000

RUN npm install
