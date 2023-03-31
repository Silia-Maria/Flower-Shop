import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Idflowers } from '../Idflowers';
import { CartService } from '../cart.service';
import { flowers } from '../flowers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  flower: Idflowers = {} as Idflowers;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    window.alert("Your Flowers have been successfully added to the cart!");
    this.cartService.addToCart(this.flower);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['flowerId'];
      this.flower = flowers[this.id];

    });
  }

}
