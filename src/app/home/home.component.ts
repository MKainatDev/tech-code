import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,ProductsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    AOS.init();
  }
}
