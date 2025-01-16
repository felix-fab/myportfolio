# Dockerfile for Nginx with optional HTTPS support

# Use the official Nginx image as a base
FROM nginx:latest

# Copy your HTML files into the container
COPY ./html /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy SSL files (optional for HTTPS)
# COPY ./ssl /etc/nginx/ssl

# Default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]