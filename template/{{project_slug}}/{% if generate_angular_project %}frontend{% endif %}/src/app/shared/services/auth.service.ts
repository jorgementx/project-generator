import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, effect } from '@angular/core';
import { environment } from '../../../environments/environment';

type User = {
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessTokenKey = 'accessToken';
  private backendUrl = environment.backendUrl;

  registrationSuccess = signal<boolean>(false);
  token = signal<string | null>(localStorage.getItem(this.accessTokenKey));
  isAuth = computed(() => this.token() !== null);
  loading = signal<boolean>(false);
  user = signal<User | null>(null);

  constructor(private http: HttpClient) {
    effect(() => {
      const token = this.token();
      if (token !== null) {
        localStorage.setItem(this.accessTokenKey, token);
      } else {
        localStorage.removeItem(this.accessTokenKey);
        this.user.set(null);
      }
    });
  }

  passwordReset() {}

  setNewPassword() {}

  login(credentials: { email: string; password: string }) {
    this.loading.set(true);
    this.http
      .post<{ key: string }>(`${this.backendUrl}/api/auth/login/`, credentials)
      .subscribe({
        next: (res) => {
          this.user.set({
            email: credentials.email,
          });
          this.token.set(res.key);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        },
      });
  }

  logout() {
    this.loading.set(true);
    this.http
      .post(`${this.backendUrl}/api/auth/logout/`, {
        Headers: {
          Authorization: `Bearer ${this.token()}`,
        },
      })
      .subscribe({
        next: () => {
          this.token.set(null);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        },
      });
  }

  signup(credentials: { email: string; password1: string; password2: string }) {
    return this.http.post(`${this.backendUrl}/api/auth/register/`, credentials, {observe: 'response'});
  }
}
