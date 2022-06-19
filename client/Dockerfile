FROM node:alpine AS frontendStageBuilder
WORKDIR /opt/app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=frontendStageBuilder /opt/app/build /usr/share/nginx/html