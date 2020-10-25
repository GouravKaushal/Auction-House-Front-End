import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  products: Product[];


  getAllProducts() {
    this.productService.getLiveProducts().subscribe(
      data => {
          this.products = data.object;
          for(let i=0;i<this.products.length;i++){
            console.log("Products : "+this.products[i].productName);
          }
      }
    )
  }

}
