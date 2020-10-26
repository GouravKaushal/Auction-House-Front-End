import { ProductCategory } from "./product-category";
import { User } from "./user";

export class Product {

    constructor(public productId: number, public productName: string, public productDetails: string,
        public bidAmount: number, public image: string, public user
            : User, public productCategory: ProductCategory, public closingDate?: Date, public status?: string, public timeLeft?: number,public extendHours?:number) {
    }

}