import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>Chào mừng bạn đến với trang quản lý!</p>
    </div>
  `,
  styles: [`
    .dashboard {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class DashboardComponent {}
