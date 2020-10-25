import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { MyAunctionComponent } from './my-aunction/my-aunction.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http';
import { SellProductComponent } from './sell-product/sell-product.component';
import { MailComponent } from './mail/mail.component';
import { BidComponent } from './bid/bid.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyAunctionComponent,
    LoginComponent,
    SignupComponent,
    AllProductsComponent,
    SellProductComponent,
    MailComponent,
    BidComponent,
    UpdateProductComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
