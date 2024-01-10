import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sellerAuth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'add-product',
    component:AddProductComponent,
    // canActivate:[authGuard]
  },
  {
    path:'app-product-list',
    component:SellerProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
