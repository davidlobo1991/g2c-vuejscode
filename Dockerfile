FROM node:latest

ENV APP_ROOT /src
ENV HOST 0.0.0.0

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

EXPOSE 3000

CMD npm install && npm run dev
