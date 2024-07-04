ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm i -g @angular/cli

CMD ["ng", "serve", "--configuration", "production", "--host", "0.0.0.0"]
