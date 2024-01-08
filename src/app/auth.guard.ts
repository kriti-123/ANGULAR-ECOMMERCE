import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
export const authGuard: CanActivateFn = (route, state) => {
  let val = localStorage.getItem('idss')
   if(val=='true'){
       return true;
   }
   else return false;
};
