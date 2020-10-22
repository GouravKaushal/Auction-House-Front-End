import { Product } from "./product";

export class Bid{

    constructor(public bidId?:number, public bidAmount?:number, public product?:Product, 
        public bidderId?:number){
    }

}