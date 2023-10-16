from django.contrib import admin
from .models import *


class UserAdmin(admin.ModelAdmin):
    exclude = ['password', 'username']
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_superuser')


admin.site.register(User, UserAdmin)
