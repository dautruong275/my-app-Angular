import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule,RouterModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private pouterModule: RouterModule) {}
  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      debugger;
      console.log('Login successful!');
      this.router.navigate(['/dashboard']);
      // Chuyển hướng sang trang Dashboard hoặc xử lý logic đăng nhập
    } else {
      alert('Email hoặc mật khẩu không đúng!');
      console.log('Invalid credentials!');
    }
  }
}
