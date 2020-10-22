import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bid } from 'app/models/bid';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { 
    console.log('Inside constructor(private http: HttpClient)');
  }

  private baseUrl:string = 'http://localhost:8080/auction';

  // Service to place a bid on particular product by bidder
  placeBidOnProduct(bid: Bid): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/place/bid', bid);
  }

  // Service to get bids history by the product id
  getBidHistoryByProductId(productId: number): Observable<Bid[]>{
    return this.http.get<Bid[]>(this.baseUrl + '/bid/history/' + productId);
  }

  // Service to get bids by the Bidder id
  getBidsByBidderId(bidderId: number): Observable<Bid[]>{
    return this.http.get<Bid[]>(this.baseUrl + '/get/bids/bidder/' + bidderId);
  }
}
