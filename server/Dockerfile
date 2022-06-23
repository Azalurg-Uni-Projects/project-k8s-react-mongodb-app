FROM node:alpine

WORKDIR /opt/server

COPY ./package.json ./

RUN yarn install

COPY ./ ./

CMD node server.js