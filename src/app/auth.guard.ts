import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
export const authGuard: CanActivateFn = (route, state) => {
  let val = localStorage.getItem('idss');
  let emailval = localStorage.getItem('email');
   if(val=='true'){
       return true;
   }
   else if(emailval!=null) return true;
   else return false;
};
