import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common'; // Import CurrencyPipe để định dạng tiền tệ

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // Import CurrencyPipe
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      description: 'Mô tả sản phẩm 1.',
      price: 150000,
      image: 'https://via.placeholder.com/300x200?text=Sản+phẩm+1'
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2.',
      price: 250000,
      image: 'https://via.placeholder.com/300x200?text=Sản+phẩm+2'
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      description: 'Mô tả sản phẩm 3.',
      price: 350000,
      image: 'https://via.placeholder.com/300x200?text=Sản+phẩm+3'
    },
    {
      id: 4,
      name: 'Sản phẩm 4',
      description: 'Mô tả sản phẩm 4.',
      price: 450000,
      image: 'https://via.placeholder.com/300x200?text=Sản+phẩm+4'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
