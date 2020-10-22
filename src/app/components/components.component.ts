import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    constructor(private renderer: Renderer2, private productService: ProductService,private router:Router) {
        this.getLatestProduct();
     }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
      
        
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }





    timeTracker: number;
    products: Product[];
    getLatestProduct() {
        this.productService.getLatestProduct().subscribe(
            data => {
                this.products = data.object;
                for (let i = 0; i < this.products.length; i++) {
                    console.log("\n\nName "+this.products[i].productName);
                    console.log("\n\n Image "+this.products[i].image);
                    this.showTimer(this.products[i].closingDate.toString());
                    this.timeTracker = i;
                }
            }
        )
    }

    showTimer(closingDate: string): any {

        console.log("\n\n\n inside show timer")
        var timer;

        var compareDate = new Date(closingDate);
        console.log(new Date(closingDate));

        console.log(compareDate);

        let timeTracker2;
        timer = setInterval(function () {
            timeBetweenDates(compareDate);
        }, 1000);

        timeTracker2 = this.timeTracker
        function timeBetweenDates(toDate) {

            var dateEntered = toDate;
            var now = new Date();
            var difference = dateEntered.getTime() - now.getTime();
            

            if (difference <= 0) {

                // Timer done
                clearInterval(timer);

            } else {

                var seconds = Math.floor(difference / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);

                hours %= 24;
                minutes %= 60;
                seconds %= 60;

                if (timeTracker2 == 0) {
                    $("#hours1").text(hours);
                    $("#minutes1").text(minutes);
                    $("#seconds1").text(seconds);
                }
                
                if (timeTracker2 == 1) {
                    $("#hours2").text(hours);
                    $("#minutes2").text(minutes);
                    $("#seconds2").text(seconds);
                }
                
                if (timeTracker2 == 2) {
                    $("#hours3").text(hours);
                    $("#minutes3").text(minutes);
                    $("#seconds3").text(seconds);
                }
                
                if (timeTracker2 == 3) {
                    $("#hours4").text(hours);
                    $("#minutes4").text(minutes);
                    $("#seconds4").text(seconds);
                }
                if (timeTracker2 == 4) {
                    $("#hours5").text(hours);
                    $("#minutes5").text(minutes);
                    $("#seconds5").text(seconds);
                }

            }
        }

    }

i2:number=2;
placeBid(productId){

    this.router.navigate(['/bid',productId])
}



}
