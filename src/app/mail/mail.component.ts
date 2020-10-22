import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mail } from 'app/models/mail';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
mail:Mail=new Mail('','','')
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  mailForm(form:NgForm){
    console.log(`success`);
  }


  sendMail(){
    this.userService.sendMail(this.mail).subscribe(
      data=>{
        console.log("sendMail.."+JSON.stringify(this.mail));
        console.log("sendMail.."+JSON.stringify(data));
          alert(data.message);
      }
    )
  }



}

