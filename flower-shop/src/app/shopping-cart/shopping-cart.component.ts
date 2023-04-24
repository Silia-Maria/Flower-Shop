import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
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

// delivery form info
recipientInfo = new FormGroup ({
  name: new FormControl("", Validators.required),
  address: new FormControl ("", Validators.required),
  deliveryDate: new FormControl ("", Validators.required),
  message: new FormControl ("")
}) 

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef ) { 
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
    
  }

  // increase Quantity 
  increaseQuantity(item: Idflowers) {
    item.quantity++;
    this.cartService.updateQuantity(item, item.quantity);
    this.cdr.detectChanges();
  }

  // decrease Quantity
  decreaseQuantity(item: Idflowers) {
    if(item.quantity > 1) {
      item.quantity--;
      this.cartService.updateQuantity(item, item.quantity);
      this.cdr.detectChanges();
    } else if (item.quantity === 1) {
      this.removeItem(item);
    }
  }

  // Delete Items from cart
  removeItem (item: Idflowers) {
    const index = this.items.indexOf(item);
    if(index !== -1) {
      this.items.splice(index,1);
    }
  }
  
// Fill Order details Method
 onSubmit () {
  if(this.recipientInfo.valid) {
    console.log(this.recipientInfo);
  } else {
    console.log("invalid");
  }
 }

// Send Method
orderSent () {
  Swal.fire({
    title: '<img class="sweet-alert-img"src="/assets/images/willow.png"><h2>Thank you for choosing flùr!</h2>',
    text: 'Your Order was successfully placed.', 
    customClass: 'my-swal',
  });
  this.recipientInfo.reset();
  this.cartService.clearCart();
  this.items = [];
 
}
}
