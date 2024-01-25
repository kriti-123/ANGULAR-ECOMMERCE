import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: undefined | product;
  productQty:number=1;
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('productId');
    id &&
      this.productService.getProduct(id).subscribe((result) => {
        this.product = result;
      });
  }
  handleQuantity(op:string){
    if(op=='inc'){
      if(this.productQty<10){
        this.productQty += 1;
      }
    }
    else{
      if(this.productQty>0){
        this.productQty -= 1;
      }
    }
  }
}
