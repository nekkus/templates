FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/

COPY /keys/cert.pem /etc/ssl/
COPY /keys/key.pem /etc/ssl/

COPY example.html /usr/share/nginx/html/

RUN mkdir -p /usr/share/nginx/html/js
COPY /js/custom-panel.js /usr/share/nginx/html/js/

