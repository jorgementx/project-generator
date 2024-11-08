#!/bin/bash

envs=(
    DEBUG
    SECRET_KEY
    ALLOWED_HOSTS
    CSRF_TRUSTED_ORIGINS
    MEDIA_URL
    DB_HOST
    DB_USER
    DB_PASSWORD
    DB_NAME
)

# Check if we have configuration
haveConfig=
	for e in "${envs[@]}"; do
		if [[ -z "$haveConfig" ]] && [[ -n "${!e}" ]]; then
			haveConfig=1
		fi
    done

if [[ "$haveConfig" ]]; then

		echo "URL configuration given, configuring relevant files..."


    echo "Configuring Django settings.py"
    cat << EOF > main/local_settings.py
DEBUG = $DEBUG
SECRET_KEY = '$SECRET_KEY'
ALLOWED_HOSTS = [$ALLOWED_HOSTS]
CSRF_TRUSTED_ORIGINS = [$CSRF_TRUSTED_ORIGINS]
MEDIA_URL = '$MEDIA_URL'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '$DB_NAME',
        'USER': '$DB_USER',
        'PASSWORD': '$DB_PASSWORD',
        'HOST': '$DB_HOST',
        'PORT': '',
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EOF

        echo "Assuring correct DB Connection 1/2"
        while ! python manage.py checkdbconnection ; do
            echo "Error connecting to database, retrying in a moment" >&2
            sleep "15s"
        done

        # Just again to be assured that the connection to the DB is stable
        sleep "5s"
        echo "Assuring correct DB Connection 2/2"
        while ! python manage.py checkdbconnection ; do
            echo "Error connecting to database, retrying in a moment" >&2
            sleep "15s"
        done
        

        echo "Running migrations"
        python manage.py migrate
        python manage.py collectstatic -c --noinput
else
    echo "No database configuration given"
fi


# let's clear out the relevant environment variables (so that stray "phpinfo()" calls don't leak secrets from our code)
for e in "${envs[@]}"; do
    unset "$e"
done

exec "$@"
