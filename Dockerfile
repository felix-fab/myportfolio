# Verwende das offizielle Nginx-Image als Basis
FROM nginx:latest

# Installiere Certbot und das Plugin für Nginx
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx && \
    apt-get clean

# Kopiere deine HTML-Dateien in den Container
COPY ./html /usr/share/nginx/html

# Kopiere deine benutzerdefinierte Nginx-Konfigurationsdatei
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponiere sowohl HTTP- als auch HTTPS-Ports
EXPOSE 80 443

# CMD: Starten von Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]