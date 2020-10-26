import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductCategory } from 'app/models/product-category';
import { ProductService } from 'app/services/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product:Product=new Product(0,'','',0,'',null,null)
  constructor(private productService:ProductService,private router :ActivatedRoute) { }


  productId:number;
  productCategoryName:string;

  ngOnInit(): void {
    
    this.productId= Number(this.router.snapshot.paramMap.get("productId"));
    this.productService.getProductById(this.productId).subscribe(
      data=>{
        this.product=data.object;
        this.productCategoryName=data.message;
        this.getProductCategoryByName(this.productCategoryName)
        console.log("Category "+this.productCategoryName);
      }
    )

  }

  getProductCategoryByName(categoryName:string){
    this.productService.getProductCategoryByProductCategoryName(categoryName).subscribe(
      data=>{
        console.log("data object....."+JSON.stringify(data));
        this.product.productCategory=data.object;
      }
    )
  }

  updateForm(form:NgForm){
    
    this.product.productName=form.value.name;
    this.product.productDetails=form.value.productDetails;
    this.product.bidAmount=form.value.bidAmount;
    this.product.extendHours=form.value.extendHours;
  
    console.log("Product******************* "+JSON.stringify(this.product));
    this.productService.updateProductDetails(this.product,this.product.extendHours).subscribe(
      data=>{
        alert(data.message)
      }
    )


  }


}
