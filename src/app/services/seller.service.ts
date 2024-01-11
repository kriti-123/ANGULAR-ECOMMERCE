import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
 isSellerLoggedIn = false;
  constructor(private http:HttpClient,private router:Router) { }
  userSignup(data:any){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe(result=>{
      console.log("res",result);
       localStorage.setItem("idss","true");
       alert("successfully registered please go to the login page!!");
       this.router.navigate(['seller-home']);
       });
    localStorage.setItem("idss","false");
  }
  userLogin(data: any) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`).subscribe(result => {
      console.log(result, "logindata");
  
      const resultArray = Array.isArray(result) ? result : [result];
      if (resultArray.length > 0) {
        localStorage.setItem("email", data.email);
        this.router.navigate(['seller-home']);
      } else {
        alert("login failed!!!")
      }
    });
    setTimeout(()=>{
      localStorage.clear();
      this.router.navigate(['sellerAuth'])
    },90000)
  }
  
}
