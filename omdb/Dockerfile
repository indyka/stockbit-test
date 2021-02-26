FROM node:alpine

WORKDIR /app

COPY package*.json /app/
RUN npm install --productions
COPY . .

CMD ["node", "bin/www"]

EXPOSE 3000