FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install axios
CMD ["npm", "start"]
EXPOSE 3000
