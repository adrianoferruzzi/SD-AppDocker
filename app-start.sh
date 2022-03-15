#!/bin/bash

# docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-8
docker run -d --rm --name mysql-container mysql-8
sleep 20s
# restaura o banco
docker exec -i mysql-container mysql -uroot -p1234 <  api/db/agenda.sql
sleep 20s
docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-10
sleep 20s
docker run -d -v "$(pwd)/website":/var/www/html -p 80:80 --link node-container --rm --name php-container php-7
