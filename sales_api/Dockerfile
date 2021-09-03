FROM node:carbon-slim

# Create app directory
WORKDIR /sales_api

# Install app dependencies
COPY package.json /sales_api/
RUN npm install

# Bundle app source
COPY . /sales_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
