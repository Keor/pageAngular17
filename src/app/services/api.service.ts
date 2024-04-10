import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string ='https://fakestoreapi.com/products'
  
  getProducts():Observable<AllProduct[]>{
    return this._http.get<AllProduct[]>(this.urlBase);
 }

  getProduct(id: number):Observable<AllProduct>{
    return this._http.get<AllProduct>(`${this.urlBase}/${id}`);
  }

}