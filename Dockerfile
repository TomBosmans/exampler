FROM node:20-alpine
WORKDIR /app
EXPOSE 3000
RUN npm install -g npm@latest
CMD ["npm", "run", "start:dev"]
