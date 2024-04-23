import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  userSignup(data: any) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.log('res', result);
        localStorage.setItem('selerdata', JSON.stringify(result));
        alert('successfully registered');
        this.router.navigate(['seller-home']);
      });
  }
  userLogin(data: any) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`
      )
      .subscribe((result) => {
        console.log(result, 'logindata');
        this.router.navigate(['seller-home']);
        const resultArray = Array.isArray(result) ? result : [result];
        if (resultArray.length > 0) {
          // localStorage.setItem('email', data.email);
          console.log(resultArray[0], 'this is login data');
          localStorage.setItem('selerdata', JSON.stringify(resultArray[0]));
          this.router.navigate(['seller-home']);
        } else {
          alert('login failed!!!');
        }
      });
    // setTimeout(() => {
    //   localStorage.clear();
    //   this.router.navigate(['sellerAuth']);
    // }, 10000);
  }
}
