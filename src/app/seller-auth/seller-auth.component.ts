import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router){}
  showlogin = false;
   signUp(data:object):void{
     console.log(data);
     this.seller.userSignup(data);
   }
   signIn(data:object):void{
    this.seller.userLogin(data);
   }
   openlogin(){
     this.showlogin = true;
   }
   opensignup(){
    this.showlogin = false;
   }
   
}
