import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
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
