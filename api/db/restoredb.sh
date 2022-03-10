#!/bin/bash

docker exec -i mysql-container mysql -uroot -p1234 < api/db/agenda.sql