import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product';
import { BidService } from 'app/services/bid.service';
import { ProductService } from 'app/services/product.service';
import { Bid } from '../models/bid';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  bid: Bid = new Bid()
  constructor(private router: ActivatedRoute,private productService :ProductService,private bidService:BidService) { }


  productId: any;
  product:Product
  ngOnInit(): void {
    console.log(typeof this.router.snapshot.paramMap.get("productId"));
    this.productId= Number(this.router.snapshot.paramMap.get("productId"));
    this.productService.getProductById(this.productId).subscribe(
      data=>{
        this.product=data.object;
        console.log(JSON.stringify(this.product));
      }
    )
    
    
  }
  bidForm(form: NgForm) {
    console.log(`bid success`);
  }


  placeBid(){
    this.bid.product=this.product;
    console.log(JSON.stringify(this.bid));
    
    this.bidService.placeBidOnProduct(this.bid).subscribe(
      data=>{
        alert(data.message)
      }
    )
  }

}
