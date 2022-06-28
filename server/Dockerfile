FROM node:16-alpine

WORKDIR /opt/app

ADD package.json yarn.lock /opt/app/

# Install node dependencies
RUN yarn install --progress=false --frozen-lockfile && \
    yarn cache clean

COPY . /opt/app

RUN yarn prisma generate
