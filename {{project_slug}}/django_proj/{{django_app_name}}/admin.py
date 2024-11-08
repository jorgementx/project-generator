from django.contrib import admin
from .models import *


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    exclude = ['password', 'username']
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_superuser')
