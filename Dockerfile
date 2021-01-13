FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

# delete parcel cache
RUN rm -rf dist/ .cache/

# RUN npm upgrade
RUN npm install

COPY . .

EXPOSE 1234

CMD ["npm", "run", "dev"]