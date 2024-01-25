import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  userSignup(data: signUp) {
    this.http
      .post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {
        // if (result) {
        //   localStorage.setItem('data', JSON.stringify(result.body));
        // }

        this.router.navigate(['/']);
      });
  }
  userLogin(data: signUp) {
    return JSON.stringify(
      this.http.get(
        `http://localhost:3000/user?email=${data.email}&password=${data.password}`
      )
    );

    // setTimeout(() => {
    //   localStorage.clear();
    //   this.router.navigate(['userAuth']);
    // }, 800000);
  }
}
