#!/bin/bash

set -eu

ensure_db_user() {
    local db_name=$1
    local db_user=$1
    local db_pass=$2

    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	    CREATE USER $db_user WITH PASSWORD '$db_pass';
	    CREATE DATABASE $db_name;
		ALTER DATABASE $db_name OWNER TO $db_user;
EOSQL

    echo "ensured database $db_name with user $db_user"
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
	for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
		ensure_db_user $(echo $db | cut -d':' -f1) $(echo $db | cut -d':' -f2)
	done
fi
