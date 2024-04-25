import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { cart, product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<product[] | []>();
  constructor(private http: HttpClient, private router: Router) {}
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProductWithId(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }
  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('cartProducts');

    if (!localCart) {
      // If no cart data exists in local storage, create a new array with the current product and store it
      localStorage.setItem('cartProducts', JSON.stringify([data]));
    } else {
      // If cart data exists, retrieve it, append the new product, and store it back
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('cartProducts', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }
  removeItemFromCart(id: number) {
    let cartData = localStorage.getItem('cartProducts');
    if (cartData) {
      let items: product[] = JSON.parse(cartData);
      items = items.filter((item: product) => id !== item.id);
      console.log(items, 'filtered item list goes here....');
      localStorage.setItem('cartProducts', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cartProduct', cartData);
  }
}
