FROM node

## Uncomment the following line if you want to expose ports
#EXPOSE 3000 

WORKDIR /app

ADD . /app

RUN npm install

CMD npm start
