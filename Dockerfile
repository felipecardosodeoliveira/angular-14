FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install @angular/cli@14 -g

COPY package*.json ./

RUN npm install

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0" ]
