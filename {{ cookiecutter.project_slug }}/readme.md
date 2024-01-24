# {{ cookiecutter.project_name }}

This readme has been generated automatically.

### How to run the backend for the first time

1. After cloning the repo, open it with an IDE (preferably PyCharm).
2. Configure a python virtual environment inside django_proj (python 3.9~) and activate it.
3. Install the dependencies: `pip install -r requirements.txt`
4. Start the database server in the port 5432 (there's a docker-compose.yaml: `docker-compose up -d`)
5. Duplicate local_settings_template.py file inside django_proj/main, rename it to local_settings.py and configure the required variables.
   - In DATABASES (if the database server has been started via docker-compose the variables to configure can be checked in the provided docker-compose.yml file):
     - Database user
     - Database password
     - Database host
6. Apply the migrations: `python manage.py migrate`
    > In case you are creating the project from scratch, you will need to create the migrations first: `python manage.py makemigrations`
7. Create a superuser: `python manage.py createsuperuser`
8. All set, from now the backend development server can be started using: `python manage.py runserver`

{% if cookiecutter.configure_angular_project %}
### How to run the frontend for the first time

1. Inside the frontend directory `npm install`
2. Once all the dependencies have been installed in `node_modules/`, the frontend can be served via `npm start`
{% endif -%}