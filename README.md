[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-purple.json)](https://github.com/copier-org/copier)

## Requirements

`uv` or `pipx` to install or use the copier python package globally.


## How to use

```
uvx copier copy --trust git@dev2.purpleblob.net:purpleblob/django-project-generator.git .
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

- Update the frontend project to use angular 20. With the new project structure and naming conventions.
  > The emaus project is already maually updated to angular 20 (not fully compliant with the new naming conventions or project structure though)

- Add basic kubernetes manifests for developing with k3d + mirrord
- Prompt the user for configuration of django import / export
- Separate frontend and backend into 2 different images
- Separate frontend and backend into 2 different git repos (optionally merge them in a single repo with git submodules)
- Configure `commitizen`
    - one for the backend integrated with `pyproject.toml`
    - one for the frontend
    - auto update version in `VERSION` file (if we decide to keep using it)
- Add super quick configuration as default with an option to do the current advanced one. Just prompt for the project name and set the defaults for everything else.
- Enable autopulling of newer images with watchtower
- Add django watson
- Task to automate GDAL and GEOS installation in case they are not available in the system (probably not a great idea and not super useful anyway)
