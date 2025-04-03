import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [FormsModule,RouterModule, CommonModule]
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Tìm kiếm:', this.searchQuery);
      // Thêm logic tìm kiếm ở đây (ví dụ: gọi API hoặc điều hướng)
    }
  }

  logout(): void {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }
}
