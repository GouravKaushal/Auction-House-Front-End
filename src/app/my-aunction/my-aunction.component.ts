import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-my-aunction',
  templateUrl: './my-aunction.component.html',
  styleUrls: ['./my-aunction.component.css']
})
export class MyAunctionComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private actRouter: ActivatedRoute) { }
  productCategoryId: number;
  min: number;
  max: number;



  ngOnInit(): void {





    this.min = Number(this.actRouter.snapshot.paramMap.get("min"));
    this.max = Number(this.actRouter.snapshot.paramMap.get("max"));
    this.productCategoryId = Number(this.actRouter.snapshot.paramMap.get("categoryId"));
    if (this.min != 0 && this.max != 0) {
      console.log("Inside OnInit 2 min and max" + this.min + " " + this.max);
      this.getProductsByPriceRange(this.min, this.max);
      this.min = 0;
      this.max = 0;
    }
    else if (this.productCategoryId != 0) {
      console.log("Inside OnInit 1");
      this.getProductsByCategoryId(this.productCategoryId);
      this.productCategoryId = 0;
    }
    else {
      this.getAllProducts();
    }


  }


  getProductsByPriceRange(min: number, max: number) {
    this.productService.getProductByPriceRange(min, max).subscribe(
      data => {
        this.buttonContext = 'Bid Now';
        console.log("List of Products By range" + JSON.stringify(data.object));
        console.log("List of Product message :" + JSON.stringify(data.message));
        this.products = data.object;
      }
    )
  }



  getProductsByCategoryId(productCategoryId: number) {

    this.productService.getProductByProductCategoryId(productCategoryId).subscribe(
      data => {
        this.buttonContext = 'Bid Now';
        console.log("List of Product" + JSON.stringify(data.object));
        console.log("List of Product" + JSON.stringify(data.message));
        this.products = data.object;


      }
    )
  }



  products: Product[];

  buttonContext: string;
  userType: string;
  isAdmin: boolean;

  getAllProducts() {
    this.productService.getLiveProducts().subscribe(
      data => {
        this.userType = data.message;
        console.log("User Type : " + data.message);

        if (data.message == "Admin" && data.message != null) {
          this.buttonContext = 'Update';
          this.isAdmin = true;

          this.products = data.object;
          for (let i = 0; i < this.products.length; i++) {
            console.log("Products : " + this.products[i].productName);
          }
        }
        if (data.message != "Admin" || data.message == null) {
          this.isAdmin = false;
          this.buttonContext = 'Bid Now';
          this.products = data.object;
          for (let i = 0; i < this.products.length; i++) {
            console.log("Products : " + this.products[i].productName);
          }
        }
      }
    )
  }


  placeBid(productId) {
    this.router.navigate(['/bid', productId])
  }

  updateProduct(productId) {
    this.router.navigate(['/updateProduct', productId])
  }

}
