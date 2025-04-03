import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule]
})
export class LoginComponent {

  user: User = new User('', '');

  constructor(private router: Router, private pouterModule: RouterModule, private authService: AuthService) {}
  onLogin() {

    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error);
      },
    });

  }
}
