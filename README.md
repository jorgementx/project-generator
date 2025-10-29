[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-purple.json)](https://github.com/copier-org/copier)

## How to use

```
copier copy --trust git@dev2.purpleblob.net:purpleblob/django-project-generator.git .
```
> More information and project structure in our [wiki](https://wiki.purpleblob.net/es/coding/project-generator)

Or to avoid installing:
```
uvx copier copy --trust git@dev2.purpleblob.net:purpleblob/django-project-generator.git .
```

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

- Update the frontend project to use angular 20. With the new project structure and naming conventions.
  > The emaus project is already maually updated to angular 20 (not fully compliant with the new naming conventions or project structure though)

- Add basic kubernetes manifests for developing with k3d + mirrord
- Update django default version to 5.2 (lts)
- Prompt the user for configuration of django import / export
- Separate frontend and backend into 2 different images
- Separate frontend and backend into 2 different git repos (optionally merge them in a single repo with git submodules)
- Configure `commitizen`
    - one for the backend integrated with `pyproject.toml`
    - one for the backend integrated with `pyproject.toml`
    - auto update version in `VERSION` file (if we decide to keep using it)
- Add super quick configuration as default with an option to do the current advanced one. Just prompt for the project name and set the defaults for everything else.
- Enable autopulling of newer images with watchtower
- Add django watson
- Task to automate GDAL and GEOS installation in case they are not available in the system (probably not a great idea and not super useful anyway)
