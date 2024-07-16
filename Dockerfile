
FROM node:18-alpine

WORKDIR /react-mobi

COPY package.json .
COPY tsconfig.json .

RUN npm i

EXPOSE 3000
