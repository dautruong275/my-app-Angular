import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule,RouterModule]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {}
  onRegister() {
    const user = { username: this.username, email: this.email, password: this.password };

    this.authService.register(user).subscribe({
      next: (response) => {
        this.router.navigate(['/register-success']);
      },
      error: (error) => {
        console.error('Register failed', error);
      }
    });
  }
}
