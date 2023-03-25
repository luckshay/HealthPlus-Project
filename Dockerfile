# Base image
FROM node:14.17.0-alpine3.13

# Install Python 3 and pip
RUN apk update && \
    apk add --no-cache python3 py3-pip && \
    pip3 install --upgrade pip setuptools

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY server/requirements.txt ./
RUN pip3 install -r requirements.txt

# Copy the rest of the client code
COPY client/ ./client/

# Copy the rest of the server code
COPY server/ ./server/

# Install client dependencies and build the client
WORKDIR /usr/src/app/client
RUN npm install && \
    npm run build

# Switch back to server directory
WORKDIR /usr/src/app/server

# Expose server port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
