FROM node:13.12.0-alpine as build
ARG SERVER_ENV
ENV REACT_APP_SERVER_TYPE=$SERVER_ENV
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build