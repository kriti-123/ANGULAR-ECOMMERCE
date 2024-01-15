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
    this.list();
  }
  deleteProduct(id:number){
    this.product.deleteProductWithId(id).subscribe((result)=>{
      console.log(result,"deleted");
      this.list();
      
    });
    console.log(id);
  }
  list(){
    this.product.productList().subscribe((result)=>{
      console.log(result,"products list here");
      this.productListArr = result;
    })
  }
}
