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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'allproducts', component: AllProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'my-aunction', component: MyAunctionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sell', component: SellProductComponent },
  { path: 'bid/:productId', component: BidComponent },
  { path: 'mail', component: MailComponent },
  { path: 'updateProduct', component: UpdateProductComponent }
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
