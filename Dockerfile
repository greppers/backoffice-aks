FROM node:18.16.0 AS build
WORKDIR /home/app
COPY . /home/app/
RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps
RUN npm run build --prod

CMD ng serve --host 0.0.0.0