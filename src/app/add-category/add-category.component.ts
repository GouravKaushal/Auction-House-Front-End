import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategory } from 'app/models/product-category';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
productCategory:ProductCategory=new ProductCategory(0,'') 
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }


  
  addCategory(form:NgForm){
    console.log(form.value.category);
    this.productCategory.productCategoryName=form.value.category;
    this.productService.addNewProductCategory(this.productCategory).subscribe(
      data=>{
          alert(data.message)
      }
    )
  }

}
