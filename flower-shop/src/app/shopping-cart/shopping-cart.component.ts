import { Component, OnInit } from '@angular/core';
import { Idflowers } from '../Idflowers';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Array<Idflowers> = [];
  total: number = this.cartService.result();
 
recipientInfo = new FormGroup ({
  name: new FormControl("", Validators.required),
  address: new FormControl ("", Validators.required)
}) 
  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

 onSubmit () {
  if(this.recipientInfo.valid) {
    console.log(this.recipientInfo);
  } else {
    console.log("invalid");
  }
 }

 orderSent () {
  window.alert("Your Order was successfull!");
  this.recipientInfo.reset;
  this.total = 0;
  this.items = [];
 }
}
