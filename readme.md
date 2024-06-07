## How to use

- For the first time:
    1. **SSH**
    ```
    pipx run cookiecutter git@dev2.purpleblob.net:purpleblob/django-project-generator.git
    ```
    2. **HTTPS**
    ```
    pipx run cookiecutter https://dev2.purpleblob.net/purpleblob/django-project-generator.git
    ```

- If we already did it once our cookiecutter project gets saved in `~/cookiecutters/` directory. So assuming there are no changes in this repo:
    ```
    pipx run cookiecutter  ~/.cookiecutters/django-project-generator
    ```

> We can always use the first command and we will get prompted if it should get pulled again

## Requirements
- Having `pipx` installed in the system is recommended. If it is not an option check the [official documentation](https://cookiecutter.readthedocs.io/en/stable/README.html#installation) for alternatives.

## Installation

```
pipx install cookiecutter
```


## TODOs:

- [ ] add support for docker image creation (if possible):
    - dynamic entrypoint
    - supervisor conf
    - nginx conf
    - dockerfile
- [ ] conditionally ask for celery configuration settings if celery option was set to true
- [ ] add a choicefield for choosing DBMS (PostgreSQL, sqlite, mysql...)
- [ ] add choices for configuring S3 storage for mediafiles
