# KEEP local_settings_template.py SYNCRONIZED WITH THIS FILE (CHANGE THE VALUES WITH PLACEHOLDERS OR KEEP THEM EMPTY)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-{{ random_ascii_string(20) }}"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']
# CSRF_TRUSTED_ORIGINS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '{{ cookiecutter.project_slug }}',
        'USER': '{{ cookiecutter.db_user }}',
        'PASSWORD': '{{ cookiecutter.db_password }}',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

CELERY_BROKER_URL = 'amqp://{{ cookiecutter.mq_user }}:{{ cookiecutter.mq_password }}@localhost:5672//'



