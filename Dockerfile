# Base image from which node project is to be deployed 
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# This will install dependencies 
RUN npm install

# Copy all source code 
COPY . .

EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]