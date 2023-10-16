from django.apps import AppConfig


class Config(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = '{{ cookiecutter.django_app_name }}'

    def ready(self):
        import {{ cookiecutter.django_app_name }}.signals


