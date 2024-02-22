FROM node:15-alpine AS builder
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN mkdir wedding-invite
WORKDIR /usr/share/nginx/html/wedding-invite
RUN rm -rf *
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
