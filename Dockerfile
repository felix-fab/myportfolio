# Verwende das offizielle Nginx-Image als Basis
FROM nginx:latest

# Installiere Certbot und Nginx-Plugin für Certbot
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx && \
    apt-get clean

# Kopiere deine HTML-Dateien in den Container
COPY ./html /usr/share/nginx/html

# Kopiere deine benutzerdefinierte Nginx-Konfigurationsdatei
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponiere sowohl HTTP- als auch HTTPS-Ports
EXPOSE 80 443

# Generiere SSL-Zertifikate und starte Nginx
# Der Nginx-Server wird automatisch mit SSL-Zertifikaten von Let's Encrypt konfiguriert
CMD certbot --standalone --non-interactive --agree-tos --email info.felixfab@gmail.com -d felixfab.de -d www.felixfab.de && nginx -g "daemon off;"