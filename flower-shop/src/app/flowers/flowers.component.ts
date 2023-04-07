import { Component, OnInit } from '@angular/core';
import { flowers } from "../flowers";
import { Idflowers } from '../Idflowers';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
flowers: Idflowers [] = flowers;
filterType = this.flowers;

  constructor(private cartService: CartService) { 

  }
  addToCart (flower: Idflowers) {
    this.cartService.addToCart(flower);
  }

  filter (type: string) {
    if (type === '') {
      this.filterType = this.flowers;
    } else {
      this.filterType = this.flowers.filter((flower) => flower.type === type);
    }
  }

  ngOnInit(): void { 
  }



}
