FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD parse.js ./

ADD package.json ./

RUN npm install

CMD ["npm", "start"]
