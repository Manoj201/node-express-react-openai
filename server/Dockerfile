# Use an official Node.js runtime as the base image
FROM node:18-alpine

RUN apk add --no-cache python3 make g++

RUN npm install -g nodemon


# Set the working directory in the container
WORKDIR /app/server

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the source code to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Define the command to run the app
CMD ["yarn", "run", "start:dev"]