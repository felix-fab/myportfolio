# Basis-Image: Nginx
FROM nginx:alpine

# Kopiere deine HTML-Dateien in das Nginx-Verzeichnis
COPY ./html /usr/share/nginx/html

# Port 80 ist der Standardport für HTTP
EXPOSE 80