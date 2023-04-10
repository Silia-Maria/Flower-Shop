import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Idflowers } from '../Idflowers';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Array<Idflowers> = [];
  get total(): number {
    return this.cartService.result();
  }

 
recipientInfo = new FormGroup ({
  name: new FormControl("", Validators.required),
  address: new FormControl ("", Validators.required),
  deliveryDate: new FormControl ("", Validators.required),
  message: new FormControl ("")
}) 
  constructor(private cartService: CartService, private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
    
  }

  increaseQuantity(item: Idflowers) {
    item.quantity++;
    this.cartService.updateQuantity(item, item.quantity);
    this.cdr.detectChanges();
  }

  decreaseQuantity(item: Idflowers) {
    if(item.quantity > 1) {
      item.quantity--;
      this.cartService.updateQuantity(item, item.quantity);
      this.cdr.detectChanges();
    } else if (item.quantity === 1) {
      this.removeItem(item);
    }
  }

  removeItem (item: Idflowers) {
    const index = this.items.indexOf(item);
    if(index !== -1) {
      this.items.splice(index,1);
    }
  }
  

 onSubmit () {
  if(this.recipientInfo.valid) {
    console.log(this.recipientInfo);
  } else {
    console.log("invalid");
  }
 }


orderSent () {
  Swal.fire({
    title: 'Thank you for choosing flùr!',
    text: 'Your Order was successfully placed.', 
    icon: 'success',

  })
  this.recipientInfo.reset;
  this.cartService.clearCart();
  this.items = [];
 
}
}
