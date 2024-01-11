import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private router:Router) { }
  addProduct(data:any){
   return this.http.post('http://localhost:3000/products',data);
  }
}
