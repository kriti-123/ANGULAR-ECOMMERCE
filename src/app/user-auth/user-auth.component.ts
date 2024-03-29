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
    this.user.userLogin(data).subscribe((result) => {
      if (result) {
        localStorage.setItem('email', result);
        localStorage.setItem('pass', result);
      }
      this.route.navigate(['/']);
    });
    setTimeout(() => {
      localStorage.clear();
      this.route.navigate(['userAuth']);
    }, 10000);
  }
  openlogin() {
    this.showlogin = true;
  }
  opensignup() {
    this.showlogin = false;
  }
}
