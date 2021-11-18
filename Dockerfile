FROM docker.io/node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN cd ./client && npm run build
EXPOSE 3000
CMD ["node", "app.js"]
