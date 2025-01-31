#!/bin/bash

echo "Assuring correct DB Connection 1/2"
while ! python manage.py checkdbconnection ; do
    echo "Error connecting to database, retrying in a moment" >&2
    sleep "15s"
done

# Just again to make sure that the connection to the DB is stable
## TODO: TRY TO REMOVE THIS SECOND STEP DOCKER SHOULD DO THIS FOR US WITH THE HEALTHCHECK (look into kubernetes too: livenessProbe, readinessProbe)
sleep "5s"
echo "Assuring correct DB Connection 2/2"
while ! python manage.py checkdbconnection ; do
    echo "Error connecting to database, retrying in a moment" >&2
    sleep "15s"
done

echo "Running migrations"
python manage.py migrate
echo "Collecting static files"
python manage.py collectstatic -c --noinput
echo "Creating superuser"
python manage.py createsuperuser --noinput

exec "$@"