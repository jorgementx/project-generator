### How to use
```cookiecutter git+ssh://git@dev2.purpleblob.net:purpleblob/django-project-generator.git```


### TODOs:
- [ ] add support for docker image creation (if possible):
    - dynamic entrypoint
    - supervisor conf
    - nginx conf
    - dockerfile
- [ ] conditionally ask for celery configuration settings if celery option was set to true
- [ ] add a choicefield for choosing DBMS (PostgreSQL, sqlite, mysql...)
- [ ] add choices for configuring S3 storage for mediafiles