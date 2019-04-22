FROM node:lts

RUN apt-get update

ADD app.js /var/www/app.js
ADD . /var/www/

WORKDIR /var/www
RUN yarn

CMD nodejs app.js
