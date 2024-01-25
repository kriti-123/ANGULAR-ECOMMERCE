import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchResult: undefined | product[];
  menuType: String = 'default';
  userName: string = '';
  constructor(
    private route: Router,
    private seller: SellerService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        console.log('opopopo', val.url);

        if (localStorage.getItem('idss') && val.url.includes('seller')) {
          console.log('seller menu');
          this.menuType = 'seller';
        } else if (val.url.includes('user')) {
          let userData = localStorage.getItem('data');
          // let userd = userData && JSON.parse(userData);
          // this.userName = userd.name;
          // console.log('yuoi', userd);

          this.menuType = 'user';
          console.log('user-menu');
        } else if (
          localStorage.getItem('email') &&
          val.url.includes('seller')
        ) {
          console.log('seller menu');
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
          console.log('default menuOOOOO');
        }
      }
    });
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      let data = query.target as HTMLSelectElement;
      this.productService.searchProduct(data.value).subscribe((result) => {
        this.searchResult = result;
        if (result.length > 5) {
          result.length = 5;
        }
        console.log(this.searchResult);
      });
    }
  }
  hideSerchResult() {
    this.searchResult = undefined;
  }
  submitSearch(val: string) {
    this.route.navigate([`search/${val}`]);
  }
  gotoPd(id: number) {
    this.route.navigate(['/detail/' + id]);
  }
}
