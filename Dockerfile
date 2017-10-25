FROM node:8-alpine

WORKDIR /var/app/and-bot-learning-events-api
ENV PORT=8081

COPY package.json ./
COPY server.js ./
COPY client_secret.json ./
COPY api ./api

RUN npm install

EXPOSE $PORT

CMD node server.js
