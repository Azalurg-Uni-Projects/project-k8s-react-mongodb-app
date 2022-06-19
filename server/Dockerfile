FROM node:alpine

WORKDIR /opt/backend

COPY ./package.json ./

RUN yarn install

COPY ./ ./

CMD node index.js