FROM mhart/alpine-node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copying compilation dependencies
COPY webpack.config.js /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY serverless.yml /usr/src/app/

# Copying app source code
COPY handler.ts /usr/src/app/handler.ts
COPY src /usr/src/app/src

# Import run options
COPY nodemon.json /usr/src/app

CMD ["npm", "run", "start:local"]
