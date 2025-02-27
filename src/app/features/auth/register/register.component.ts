import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

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

  onRegister() {
    console.log('Registering with:', this.username, this.email, this.password);
    // Thêm logic gửi dữ liệu đăng ký đến backend ở đây
  }
}
