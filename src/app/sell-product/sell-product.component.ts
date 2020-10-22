import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductCategory } from 'app/models/product-category';
import { User } from 'app/models/user';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor(private productService: ProductService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllProductCategories();

  }


  //..................................................

  productCategories: ProductCategory[] ;
  i: number;

  getAllProductCategories() {
    this.productService.getAllProductCategories().subscribe(
      data => {

        this.productCategories = data.object;
        for (this.i = 0; this.i < this.productCategories.length; this.i++) {
          console.log(this.productCategories[this.i].productCategoryName+"   "+this.productCategories[this.i].productCategoryId );
        }


        //console.log('From getAllProductCategories ...'+JSON.stringify(data.object.productCategories.productC))

      }
    )
  }



  user: User = new User(0, '', '', '', '', '');
  productCategory:ProductCategory=new ProductCategory(0,'')
  product: Product = new Product(0, '', '', 0, '', this.user,null);




  sellProduct(product: Product) {
  console.log("this.productCategory...   "+this.productCategory.productCategoryId+" "+this.productCategory.productCategoryName);
  product.productCategory=this.productCategory
  // console.log('\n\n\n Product category :- ' + JSON.stringify(product.productCategory));
    console.log('\n\n\n   Product :- ' + JSON.stringify(product));
    this.productService.sellProduct(product).subscribe(
      data => {
        if (data.code == 201) {
          console.log(data.code)
          alert(data.message);
        } else {
          alert(data.message);
        }
      }
    );
  }




  public selectedFile;
  public event1;
  imgURL: any;
  recievedImageData: any;
  base64Data: any;
  convertedImage: any;

  public handleFileInput1(event) {
    console.log(event)
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
    this.uploadImage();

  }


  onUpload() {

    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/auction/product/upload', uploadData).subscribe(
      res => {
        console.log(res)
      }
    )


  }













  //..............................................................
  uploadedImage: File;

  handleFileInput(files: FileList) {
    console.log(" inside......      handleFileInput(files: FileList)")
    this.uploadedImage = files.item(0);
    this.uploadImage();
  }


  uploadImage() {
    console.log('Inside uploadImage .....      ')
    this.productService.postFile(this.selectedFile).subscribe(
      data => {
        if (data.code == 200) {
          this.product.image = data.message
          alert('Image Uploaded Successfully')
        } else {
          alert(data.message)
        }
        console.log("Data..." + JSON.stringify(data))
      }
    )

  }






}
