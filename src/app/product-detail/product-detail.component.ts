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
  productQty: number = 1;
  removeCart = false;
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('productId');
    id &&
      this.productService.getProduct(id).subscribe((result) => {
        this.product = result;
        let cartData = localStorage.getItem('cartProducts');
        if (id && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter((item: product) => id == item.id.toString());
          if (items.length) {
            console.log('hi got this');
            this.removeCart = true;
          } else {
            console.log('item remove called');
            this.removeCart = false;
          }
        }
      });
  }
  handleQuantity(op: string) {
    if (op == 'inc') {
      if (this.productQty < 10) {
        this.productQty += 1;
      }
    } else {
      if (this.productQty > 0) {
        this.productQty -= 1;
      }
    }
  }
  addToCart() {
    if (this.product) {
      if (!localStorage.getItem('data')) {
        this.product.quantity = this.productQty;
        console.log(this.product);
        this.productService.localAddToCart(this.product);
        this.removeCart = true;
      } else {
        console.log('else block where user is logged in!!!');
      }
    }
  }
  removeToCart(id: number) {}
}
