import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent implements OnInit {
  constructor(private route: Router, private user: UserService) {}

  ngOnInit(): void {}
  showlogin = false;
  signUp(data: signUp): void {
    console.log(data);
    this.user.userSignup(data);
  }
  signIn(data: signUp): void {
    this.user.userLogin(data);
    // setTimeout(() => {
    //   localStorage.clear();
    //   this.route.navigate(['userAuth']);
    // }, 10000);
  }
  openlogin() {
    this.showlogin = true;
  }
  opensignup() {
    this.showlogin = false;
  }
  localCartToRemoteCart() {
    let data = localStorage.getItem('cartProducts');
    if (data) {
      let user = localStorage.getItem('data');
      let userId = user && JSON.parse(user);
      let cartDataList = JSON.parse(data);
    }
  }
}
