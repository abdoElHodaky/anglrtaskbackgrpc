FROM node:16alpine-3.16
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev
RUN yarn add global ts-node &&  yarn
ENV PORT 3000
EXPOSE ${PORT}
CMD ["ts-node", "./src/app.ts"]

