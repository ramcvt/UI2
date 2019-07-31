import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  cartItems=[];
  restaurantName:string='';
  restaurantLocation:string='';
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.cartItems = this.cart.getItemsFromCart();
    if(this.cartItems){
      // this.restaurantName = this.cartItems.restname;
      // this.restaurantLocation = this.cartItems[0].restlocation;

    }
  }

}
