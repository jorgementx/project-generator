# TRY TO KEEP THIS FILE SYNCRONIZED WITH local_settings.py (KEEP THE VALUES WITH PLACEHOLDERS OR EMPTY)
# IF THERE'S NO local_settings.py FILE, COPY THIS FILE, RENAME IT TO local_settings.py AND FILL THE VALUES

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']
CSRF_TRUSTED_ORIGINS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '5432',
    }
}

CELERY_BROKER_URL = 'amqp://user:password@localhost:5672//'



