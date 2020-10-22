import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component2.css']
})
export class LoginComponent implements OnInit {

  user:User=new User(0,'','','','','Bidder');

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(user: User) {
    this.userService.loginUser(user).subscribe(
      data => {
        if (data.code == 202) {
          this.router.navigate(['/home']);
        }
        else {
          alert(data.message);
        }
      }
    );
  }
}
