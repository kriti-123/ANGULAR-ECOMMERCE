import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private productService:ProductService,private http:HttpClient){}
  onAddProduct(data:any){
    this.productService.addProduct(data).subscribe((result)=>{
      console.log(result,"data ready")
      if(result!=undefined){
        alert("product added successfully");
      }
      else{
        alert("something went wrong!!")
      }
    })
    // console.log(data,"pro data")
  }
}
