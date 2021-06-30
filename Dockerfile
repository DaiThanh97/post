FROM node:16-alpine

RUN mkdir /post

WORKDIR /post

COPY package.json .

# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development" ]; \
#     then npm install; \
#     else npm install --only=production; \
#     fi

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "./dist/index.js"]