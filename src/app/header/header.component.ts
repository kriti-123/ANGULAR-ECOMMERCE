import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType:String = 'default';
   constructor(private route:Router,private seller:SellerService){}
   ngOnInit():void{
     this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem("idss")&&val.url.includes('seller')){
          console.log('seller menu')
           this.menuType = 'seller'
        }
        else{
          this.menuType = 'default'
          console.log("default menu")
        }
      }
     })
   }
}
