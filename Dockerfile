from alpine:latest
run apk add --no-cache --upgrade bash
run apk update
run apk add docker
# run addgroup username docker
run apk add --update nodejs npm

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]