FROM node:latest

ENV APP_ROOT /src
ENV HOST 0.0.0.0

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}



RUN npm install
RUN npm run build
RUN ls -la

EXPOSE 3000

RUN npm run dev
#CMD [ "npm", "run", "dev" ]
