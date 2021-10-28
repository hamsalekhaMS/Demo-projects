import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
images:any;
solutions:any;
details:any;
  constructor() { }

  ngOnInit() {
    this.images =[{
        "url":"../assets/CEO.jpg",
        "name": "David"
        },
        {
        "url":"../assets/image-2.jpg",
        "name": "James"
       },
        {
          "url":"../assets/image-3.jpg",
        "name":"John"
        },
        {
          "url":"../assets/image-4.jpg",
        "name":"Jesse"
        }
]
this.solutions = [
  {
  "url":"../assets/ecomm-2.jpg",
  "title":"Comprehensive eCommerce Platform",
  "description":"Sell on multiple sales channels, like Facebook or eBay, and manage your store from one integrated dashboard—from store orders to payment, shipping, fulfillment, marketing and more."
  },{
    "url":"../assets/Payment-Options.jpg",
    "title":"Advanced Payment Options",
    "description":"Offer customers secure checkout and handle business transactions seamlessly. Get competitive payment processing rates, custom payout schedules and dozens of payment providers."
  },{
    "url":"../assets/ecomm-1.jpg",
    "title":"Online stores",
    "description":"Sell more and promote your brand with state-of-the-art storefronts, custom cart and checkout, and an industry-leading suite of professional eCommerce apps."
  }]
  this.details =[{
    "title":"Get to know Us",
    "sol1":"solution 1",
    "sol2":"solution 2",
    "sol3":"solution 3",
    "sol4":"solution 4",
    "sol5":"solution 5"
  },
  {
    "title":"Make Money with us",
    "sol1":"option 1",
    "sol2":"option 2",
    "sol3":"option 3",
    "sol4":"option 4",
    "sol5":"option 5"
  },{
    "title":"Solutions",
    "sol1":"solution 1",
    "sol2":"solution 2",
    "sol3":"solution 3",
    "sol4":"solution 4",
    "sol5":"solution 5"
  },{
    "title":"Let Us Help You",
    "sol1":"option 1",
    "sol2":"option 2",
    "sol3":"option 3",
    "sol4":"option 4",
    "sol5":"option 5"
  }]
  }


}
