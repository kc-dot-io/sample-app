FROM mhart/alpine-node:12

WORKDIR /src/api

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
