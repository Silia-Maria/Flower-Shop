import { Injectable } from '@angular/core';
import { Idflowers } from './Idflowers';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Idflowers [] = [];

  constructor() { }

  addToCart(flower:Idflowers) {
    this.items.push(flower);
  }

  getItems () {
    return this.items;
  }

  clearCart () {
    this.items = [];
    return this.items;
  }
  result () {
    let total = 0;
    for(let item of this.items) {
      total += item.price;
    }
    return total;
  }
}
