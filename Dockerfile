
FROM node:18-alpine

WORKDIR /react-mobi

COPY craco.config.js .
COPY package.json .
COPY tsconfig.json .

RUN npm i

EXPOSE 3000
