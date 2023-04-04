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
public flowersList: any;
// public filterType: any;
filterType = this.flowers;


  constructor(private cartService: CartService) { 

  }
  addToCart (flower: Idflowers) {
    window.alert("successfully added to Shopping Cart!");
    this.cartService.addToCart(flower);
  }

  ngOnInit(): void {
   

  }

// filter(type:string) {
//   this.filterType = this.flowers
//   .filter((a:any)=> {
//     if(a.type == type || type == '') {
//       return a;
//     } 
//   })
// }

filter (type: string) {
  if (type === '') {
    this.filterType = this.flowers;
  } else {
    this.filterType = this.flowers.filter((flower) => flower.type === type);
  }
}

// filterFlowers(type: string) {
//   return this.flowers.filter(flower => flower.type === type);
// }
}
