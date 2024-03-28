FROM node:21.6.1-alpine

WORKDIR /opt/project/frontend

ENV PATH /opt/project/frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

RUN npm install

EXPOSE 3000
