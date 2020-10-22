import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdateProduct } from './update';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product:UpdateProduct=new UpdateProduct('','')
  constructor() { }

  ngOnInit(): void {
  }
  updateForm(form:NgForm){
    console.log(`success`);
  }


}
