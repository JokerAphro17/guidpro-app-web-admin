# Étape de construction
FROM node:14-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .

RUN npm run build



# Étape de production
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY .htaccess /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN echo $API_URL
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]