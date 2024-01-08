import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
 isSellerLoggedIn = false;
  constructor(private http:HttpClient,private router:Router) { }
  userSignup(data:any){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe(result=>{
      console.log("res",result);
       localStorage.setItem("idss","true")
       this.router.navigate(['seller-home']);
       
    });
    localStorage.setItem("idss","false");
  }
}
