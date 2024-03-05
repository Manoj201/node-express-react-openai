# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./



# Install the dependencies
RUN yarn install

# Copy the source code to the container
COPY . .


# Expose the port on which the app will run
EXPOSE 8080

# Define the command to run the app
CMD ["yarn", "run", "dev"]
