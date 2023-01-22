FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]