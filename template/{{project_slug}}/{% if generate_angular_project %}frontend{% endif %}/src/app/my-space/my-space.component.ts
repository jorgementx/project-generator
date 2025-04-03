import { httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

interface User {
  id: number;
  last_login: string;
  first_name: string;
  last_name: string;
  date_joined: string;
  username: string;
  email: string;
  is_staff: string;
  is_superuser: string;
}

@Component({
  selector: 'app-my-space',
  imports: [JsonPipe],
  templateUrl: './my-space.component.html',
  styleUrl: './my-space.component.scss',
})
export class MySpaceComponent {
  private auth = inject(AuthService);
  userResource = httpResource<User>(() => `${environment.backendUrl}/api/me/`);

  externalResource = httpResource(() => ({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    headers: {
      Authorization: 'No-Auth', // No-Auth is a custom header value to skip the auth interceptor
    },
  }));

  logout() {
    this.auth.logout();
  }

  reload() {
    this.userResource.reload();
    this.externalResource.reload();
  }
}
