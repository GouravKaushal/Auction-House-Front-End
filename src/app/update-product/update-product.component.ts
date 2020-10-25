import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'app/models/product';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product:Product=new Product(0,'','',0,'',null,null)
  constructor() { }

  ngOnInit(): void {
  }
  updateForm(form:NgForm){
    console.log(`success`);
  }


}
