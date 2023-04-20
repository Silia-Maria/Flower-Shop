import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Idflowers } from '../Idflowers';
import { CartService } from '../cart.service';
import { flowers } from '../flowers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  flowers: Idflowers [] = flowers;
  flower: Idflowers = {} as Idflowers;
  id: number = 0;
  fromHome!: boolean;
  

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }


  addToCart() {
this.cartService.addToCart(this.flower);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.fromHome = params['fromHome'] === 'true';
    })
    this.route.params.subscribe((params: Params) => {
      this.id = +params['flowerId'];
      const flower = flowers.find(f => f.id === this.id);
      if(flower) {
        this.flower = flower;
      }

    });
  
   
  }
}




