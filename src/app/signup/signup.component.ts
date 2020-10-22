import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductCategory } from 'app/models/product-category';
import { User } from 'app/models/user';
import { ProductService } from 'app/services/product.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user: User = new User(0, '', '', '', '', 'Bidder');
  ngOnInit(): void {
  }

  registerUser(user: User) {
    console.log('User :- ' + JSON.stringify(user));
    this.userService.registerUser(user).subscribe(
      data => {
        if (data.code == 201) {
          console.log(data.code)
          alert(data.message);
          this.router.navigate(['/login']);  // Path whatever is given in router.ts file for login form
        } else {
          alert(data.message);
        }
      }
    );
  }





  // ..............................Test Functions......................................









}
