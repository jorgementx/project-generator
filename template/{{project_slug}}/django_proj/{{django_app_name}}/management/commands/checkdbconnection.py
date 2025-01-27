from django.core.management.base import BaseCommand
import sys


class Command(BaseCommand):
    help = 'Check database connection'
    def handle(self, *args, **options):
        from django.db import connection
        try:
            cursor = connection.cursor()
            if cursor:
                self.stdout.write(self.style.SUCCESS('Database connection successful'))
                sys.exit(0)
            else:
                self.stdout.write(self.style.ERROR('Database connection failed'))
                sys.exit(1)
        except Exception as e:
            self.stdout.write(self.style.ERROR('Database connection failed'))
            self.stdout.write(self.style.ERROR(e))
            sys.exit(1)
            