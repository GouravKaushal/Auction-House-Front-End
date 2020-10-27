import { Component, OnInit } from '@angular/core';
import { Bid } from 'app/models/bid';
import { BidService } from 'app/services/bid.service';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.css']
})
export class BidHistoryComponent implements OnInit {

  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.getAllBids();
  }

  bids:Bid[];
  getAllBids() {
    this.bidService.getAllBids().subscribe(
      data=>{
        console.log("All Bids : "+JSON.stringify(data.object));
        this.bids=data.object
      }
    )

  }
}
