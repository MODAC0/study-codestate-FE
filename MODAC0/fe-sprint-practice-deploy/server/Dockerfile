FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN yarn

COPY ./ ./
EXPOSE 80
CMD ["npm", "start"]
