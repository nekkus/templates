FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/

COPY /keys/cert.pem /etc/ssl/
COPY /keys/key.pem /etc/ssl/

COPY app.html /usr/share/nginx/html

RUN echo 'Navigate the browser to https://localhost:4500' 
