from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import *


@admin.register(User)
class UserAdmin(ModelAdmin):
    exclude = ['password', 'username']
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_superuser')
