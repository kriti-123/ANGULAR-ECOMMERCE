import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent{
  productListArr: undefined|product[];
  constructor(private product:ProductService){
  // ngOnInIt(){
    this.product.productList().subscribe((result)=>{
      console.log(result,"products list here");
      this.productListArr = result;
    })
  }
}
