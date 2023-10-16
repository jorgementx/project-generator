#!/bin/bash
{% if cookiecutter.configure_celery %}
{% else %}
rm -f ./main/celery.py
rm -f ./{{ cookiecutter.django_app_name }}/tasks.py
{% endif %}
{% if cookiecutter.configure_angular_project %}ng new --skip-git frontend{% endif %}
{% if cookiecutter.initialize_git_repo %}git init --initial-branch=main{% endif %}

echo ""
echo "#################################"
echo "# Project successfully created! #"
echo "#################################"