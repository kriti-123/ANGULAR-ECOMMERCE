import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {product} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private router:Router) { }
  addProduct(data:product){
   return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProductWithId(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }
  searchProduct(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
}
