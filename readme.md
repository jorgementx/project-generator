### How to use
- For the first time:
    1. **SSH**
    ```
    cookiecutter git@dev2.purpleblob.net:purpleblob/django-project-generator.git
    ```
    2. **HTTPS**
    ```
    cookiecutter https://dev2.purpleblob.net/purpleblob/django-project-generator.git
    ```

- If we already did it once our cookiecutter project gets saved in `~/cookiecutters/` directory. So assuming there are no changes in this repo:
    ```
    cookiecutter  ~/.cookiecutters/django-project-generator
    ```

> We can always use the first command and we will get prompted if it should get pulled again


### TODOs:
- [ ] add support for docker image creation (if possible):
    - dynamic entrypoint
    - supervisor conf
    - nginx conf
    - dockerfile
- [ ] conditionally ask for celery configuration settings if celery option was set to true
- [ ] add a choicefield for choosing DBMS (PostgreSQL, sqlite, mysql...)
- [ ] add choices for configuring S3 storage for mediafiles
