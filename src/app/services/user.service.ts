import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  userSignup(data: signUp) {
    this.http
      .post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('data', JSON.stringify(result.body));
        }

        this.router.navigate(['']);
      });
  }
  userLogin(data: signUp) {
    this.http
      .get(
        `http://localhost:3000/user?email=${data.email}&password=${data.password}`
      )
      .subscribe((result) => {
        console.log(result, 'logindata');
        // this.router.navigate(['/']);
        const resultArray = Array.isArray(result) ? result : [result];
        if (resultArray.length > 0) {
          // localStorage.setItem('email', data.email);
          console.log(resultArray[0], 'this is login data');
          localStorage.setItem('data', JSON.stringify(resultArray[0]));
          this.router.navigate(['']);
        } else {
          alert('login failed!!!');
        }
      });
  }
}
function subscribe(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}
