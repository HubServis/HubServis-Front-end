FROM node:21-alpine AS build

RUN apk update ; apk upgrade -i -a --update-cache -y ; apk add --no-cache curl \
    && curl -fsSL 'https://github.com/pnpm/pnpm/releases/download/v8.6.12/pnpm-linuxstatic-x64' -o /bin/pnpm \
    && chmod +x /bin/pnpm

USER node

WORKDIR /app

COPY package.json ./

RUN pnpm install

EXPOSE 5173

ENV PORT 5173
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD [ "pnpm", "dev-exposed" ]
