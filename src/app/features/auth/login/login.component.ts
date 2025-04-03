import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
   ) {}
  onLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    };
    this.authService.login(loginData).subscribe({
      next: (response) => {
        const token = response.token;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Register failed', error);
      }
    });

  }
}
