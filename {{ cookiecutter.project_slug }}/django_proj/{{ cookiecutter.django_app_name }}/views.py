# from django.core.mail import send_mail
# from django.template import loader
from django.http import HttpResponse
from rest_framework import status
# from rest_framework.permissions import 

from django.apps import apps

from {{ cookiecutter.django_app_name }}.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes



