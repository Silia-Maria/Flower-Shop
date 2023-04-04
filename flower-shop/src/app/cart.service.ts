import { Injectable } from '@angular/core';
import { Idflowers } from './Idflowers';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Idflowers [] = [];
  

  constructor() { }

  addToCart(flower:Idflowers) {
    flower.quantity = 1;
    this.items.push(flower);
  }

  getItems () {
    return this.items;
  }

  clearCart () {
    this.items = [];
    return this.items;
  }

   updateQuantity(item: Idflowers, quantity:number) {
    item.quantity = quantity;
  }
  result () {
    let total = 0;
    for(let item of this.items) {
      total += item.price*item.quantity;
    }
    return total;
  }

 
}
