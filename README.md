# Description
r³k.io

##SSL
- Setup SSL using: https://letsencrypt.org/
- https://certbot.eff.org/
- openssl pkcs12 -export -out keystore.p12 -inkey privkey.pem -in fullchain.pem

## Docker
### Build
mvn clean package docker:build

### Pull
docker pull r3kdotio/r3kdotio

## Run HTTP
docker run --name website -p -d 80:8080 r3kdotio/io.r3k.r3kdotio

## Run HTTPS
docker run -v /etc/letsencrypt/www.r3k.io/live/:/etc/letsencrypt/www.r3k.io/live --name website -d  -p 443:8443 r3kdotio/r3kdotio /etc/letsencrypt/www.r3k.io/live/keystore.p12 YOURPASSWORDNOTMINE

