import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductCategory } from 'app/models/product-category';
import { Response } from 'app/models/response';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    console.log('Inside constructor(private http: HttpClient)');
  }

  private baseUrl:string = 'http://localhost:8080/auction';

  // Service to register product for sell by the seller
  sellProduct(product: Product): Observable<Response>{
    return this.http.post<Response>(this.baseUrl + '/product/sell/product', product);
  }

  // Service to get latest 5 products that are open to sell
  getLatestProduct(): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/latest');
  }

  // Service to get all products
  getLiveProducts(): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/live/products');
  }

  // Service to upload image of product
  postFile(fileToUpload: File): Observable<Response> {​​
      const formData: FormData = new FormData();
      formData.append('image', fileToUpload, fileToUpload.name);
      return this.http
        .post<Response>(this.baseUrl + '/product/upload', formData);
  }​​
  
  



  // Service to get all product-categories
  getAllProductCategories(): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/categories');
  }

  // Service to get product by product id
  getProductById(productId:number): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/details/' + productId);
  }

  // Service to get productCatgory by productCategoryId
  getProductByProductCategoryId(productCategoryId:number): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/category/categoryId/' + productCategoryId);
  }

  // Service to get all products within price range
  getProductByPriceRange(minimumProductCost:number, maximumProductCost:number): Observable<any>{
    console.log("Inside Product service...");
    
    return this.http.get<any>(this.baseUrl + '/product/' + minimumProductCost + '/' + maximumProductCost);
  }

  // Service to add new product category by the admin
  addNewProductCategory(productCategory: ProductCategory): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/admin/add/product/category', productCategory);
  }

   // Service to get productCatgory by productCategoryId
   getProductCategoryByProductCategoryName(productCategoryName:string): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/product/category/categoryName/' + productCategoryName);
  }

  // Service to update product details
  updateProductDetails(product: Product,extendHours:number): Observable<any>{
    return this.http.put<any>(this.baseUrl + '/admin/update/product/'+extendHours ,product);
  }
}
