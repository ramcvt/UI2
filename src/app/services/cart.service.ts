import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addItemtoCart(item){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    if(cartitems && cartitems.items.length){
      cartitems.items=[...cartitems.items,...item.items]
    }
    else
      cartitems =item;
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

  getItemsFromCart(){
    return JSON.parse(localStorage.getItem('cartitems'));
  }

  decrementItemCount(itemname){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    cartitems.items.filter(x=>x.itemname==itemname).map(x=>x.itemquant= x.itemquant-1);
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

  incrementItemQuantity(itemname){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    cartitems.items.filter(x=>x.itemname==itemname).forEach(element => {
      return element.itemquant = ++ element.itemquant;
    });

    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

}
