import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-singup',
  imports: [FormsModule, RouterLink],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SingupComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  email = signal('');
  password1 = signal('');
  password2 = signal('');

  signup() {
    this.auth
      .signup({
        email: this.email(),
        password1: this.password1(),
        password2: this.password2(),
      }).subscribe({
        next: async () => {
          this.email.set('');
          this.password1.set('');
          this.password2.set('');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error during signup:', err);

          // Handle error
        },
      });
  }
}
