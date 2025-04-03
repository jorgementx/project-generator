[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-purple.json)](https://github.com/copier-org/copier)

## How to use

```
copier copy --trust git@dev2.purpleblob.net:purpleblob/django-project-generator.git .
```
> More information and project structure in our [wiki](https://wiki.purpleblob.net/es/coding/project-generator)

## Requirements

- Having `pipx` installed in the system is strongly suggested. If it is not an option check the [official documentation](https://copier.readthedocs.io/en/stable/#installation) for alternatives.

## Installation

```
pipx install copier
```

## Postinstall

Steps to get the django server running after generating the project.

> `docker` and `uv` are needed

```
cd <my-project>/django_proj
uv sync
docker compose up -d
uv run manage.py makemigrations
uv run manage.py migrate
uv run manage.py createsuperuser
uv run manage.py runserver
```

## TODOs:

> In order of priority

- Task to automate GDAL and GEOS installation in case they are not available in the system.
- Add django watson
- Add super quick configuration as default with an option to do the current advanced one. Just prompt for the project name and set the defaults for everything else.
- Add support for docker image creation (if possible):
  - dynamic entrypoint
  - supervisor conf
  - nginx conf
  - dockerfile
- Enable autopulling of newer images with watchtower
