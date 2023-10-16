from rest_framework.authentication import TokenAuthentication as drfTokenAuth


class TokenAuthentication(drfTokenAuth):
    keyword = 'Bearer'
