FROM python:3-alpine AS builder

WORKDIR /build

RUN apk update && apk upgrade
RUN apk add --no-cache \
  git \
  build-base \
  python3-dev \
  musl-dev \
  libffi-dev

RUN pip install fonttools brotli
RUN git clone https://github.com/mebeim/linux-syscalls .

RUN ./scripts/build_web_db.py

RUN sed -i -E 's/mktemp[[:space:]]+[^[:space:]]+/mktemp\)/g' ./scripts/build_web_fonts.sh
RUN sh ./scripts/build_web_fonts.sh

FROM busybox:latest

COPY --from=builder /build/www/ /srv/http/
CMD ["httpd", "-f", "-p", "80", "-h", "/srv/http/"]
