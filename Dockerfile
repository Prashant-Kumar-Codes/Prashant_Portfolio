# ─────────────────────────────────────────────────────────
# Portfolio — Static Site Container
# ─────────────────────────────────────────────────────────
FROM nginx:1.27-alpine

LABEL maintainer="Prashant <prashant@prashantbuilds.in>"
LABEL description="Static portfolio site served via Nginx"

RUN rm -rf /usr/share/nginx/html/*

COPY portfolio.html /usr/share/nginx/html/index.html
COPY portfolio.css  /usr/share/nginx/html/portfolio.css
COPY portfolio.js   /usr/share/nginx/html/portfolio.js
COPY *.png /usr/share/nginx/html/
COPY *.jpg /usr/share/nginx/html/

RUN cat > /etc/nginx/conf.d/default.conf << 'EOF'
server {
    listen 80;
    listen [::]:80; # Opt-in to IPv6 loopback binding to support Alpine DNS profiles
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 256;

    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    server_tokens off;
}
EOF

EXPOSE 80

# Optimization: Target the explicit IPv4 loopback to avoid DNS resolution delays
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/ || exit 1