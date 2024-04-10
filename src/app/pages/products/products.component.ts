import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AllProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: AllProduct[] = []
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: AllProduct[]) => {
      console.log(data)
      this.productList = data;
    });
  }

  navegate(id: number): void{
    this._router.navigate(['/products', id]);
  }

}