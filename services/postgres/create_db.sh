#!/bin/bash
set -eu

DB_NAME="$1"
DB_USER="$1"
DB_PASS="$1"

docker exec -i lab-postgresql-1 psql -U admin <<EOF
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '${DB_USER}') THEN
      CREATE ROLE ${DB_USER} LOGIN PASSWORD '${DB_PASS}';
   END IF;
END
\$\$;

CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};

REVOKE CONNECT ON DATABASE ${DB_NAME} FROM PUBLIC;

GRANT CONNECT ON DATABASE ${DB_NAME} TO ${DB_USER};
EOF
