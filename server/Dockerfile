FROM node:16-alpine

WORKDIR /opt/app

ADD package.json yarn.lock /opt/app/

# Install node dependencies
RUN yarn install --progress=false --frozen-lockfile && \
    yarn cache clean

# Clear the database and migrate
RUN if [ "$NODE_ENV" = "development" ]; then \
        yarn prisma migrate reset; \
    fi

COPY . /opt/app
