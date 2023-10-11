FROM node:18-alpine

RUN apk add --no-cache curl \
    && curl -fsSL 'https://github.com/pnpm/pnpm/releases/download/v8.6.12/pnpm-linuxstatic-x64' -o /bin/pnpm \
    && chmod +x /bin/pnpm

WORKDIR /usr/src/app

COPY ./package.json .

RUN pnpm install

COPY . .

EXPOSE 4000

ENV PORT 4000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD [ "pnpm", "run", "dev-exposed" ]
