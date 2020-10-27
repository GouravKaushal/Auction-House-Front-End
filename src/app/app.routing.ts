import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { MyAunctionComponent } from './my-aunction/my-aunction.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { BidComponent } from './bid/bid.component';
import { MailComponent } from './mail/mail.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BidHistoryComponent } from './bid-history/bid-history.component';
import { AddCategoryComponent } from './add-category/add-category.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'allproducts', component: AllProductsComponent },
  { path: 'allProductsBycategory/:categoryId', component: AllProductsComponent },
  { path: 'allProductsByRange', component: AllProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'my-aunction', component: MyAunctionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sell', component: SellProductComponent },
  { path: 'bid/:productId', component: BidComponent },
  { path: 'mail', component: MailComponent },
  { path: 'updateProduct/:productId', component: UpdateProductComponent },
  { path: 'bidHistory', component: BidHistoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
