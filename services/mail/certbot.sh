#!/bin/sh
set -eu

: "${DOMAIN:?DOMAIN not set}"
: "${EMAIL:?EMAIL not set}"

CERT_DIR="/certs/$DOMAIN"
SRC_DIR="/etc/letsencrypt/live/$DOMAIN"

issue_first_cert() {
    echo "[certbot] issuing initial cert for $DOMAIN"
    certbot certonly \
        --dns-cloudflare \
        --dns-cloudflare-credentials /cloudflare.ini \
        --non-interactive \
        --agree-tos \
        -d "$DOMAIN" \
        --email $EMAIL
}

copy_certs() {
    mkdir -p "$CERT_DIR"
    tmp_cert="$CERT_DIR/cert.pem.tmp"
    tmp_key="$CERT_DIR/key.pem.tmp"

    cp "$SRC_DIR/fullchain.pem" "$tmp_cert"
    cp "$SRC_DIR/privkey.pem" "$tmp_key"

    chmod 600 "$tmp_cert" "$tmp_key"

    mv "$tmp_cert" "$CERT_DIR/cert.pem"
    mv "$tmp_key"  "$CERT_DIR/key.pem"
}

renew() {
    echo "[certbot] checking renewal for $DOMAIN"
    certbot renew --dns-cloudflare --dns-cloudflare-credentials /cloudflare.ini --non-interactive
    copy_certs
}

if [ ! -f "$SRC_DIR/fullchain.pem" ] || [ ! -f "$SRC_DIR/privkey.pem" ]; then
    issue_first_cert
    copy_certs
fi

while :; do
    if ! renew; then
        echo "[certbot] renewal failed, retrying later" >&2
    fi
    sleep 12h
done
