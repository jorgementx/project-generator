## How to use

```
copier copy --trust git@dev2.purpleblob.net:purpleblob/django-project-generator.git .
```
> More information in our [wiki](https://wiki.purpleblob.net/es/coding/django/copier)

## Requirements

- Having `pipx` installed in the system is strongly suggested. If it is not an option check the [official documentation](https://copier.readthedocs.io/en/stable/#installation) for alternatives.

## Installation

```
pipx install copier
```

## TODOs:

> In order of priority

- [ ] Configure django settings.py with django-environ instead of current local_settings.py
- [ ] Configure email backend
- [ ] Add super quick configuration as default with an option to do the current advanced one. Just prompt for the project name and set the defaults for everything else.
- [ ] GeoDjango support
- [ ] add support for docker image creation (if possible):
  - dynamic entrypoint
  - supervisor conf
  - nginx conf
  - dockerfile
- [ ] Enable autopulling of newer images with watchtower
