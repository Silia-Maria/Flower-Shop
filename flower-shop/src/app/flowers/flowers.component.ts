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

// only show max 9 products
visibleFlowers: Idflowers [] = this.flowers.slice(0,9);

// showMore button
showMore: boolean = false;

// number of visible products 
numVisible: number = 9;

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
    this.numVisible = this.getVisibleFlowersCount();
    this.visibleFlowers = this.filterType.slice(0, this.numVisible);
  }

  ngOnInit(): void { 
    this.numVisible = this.getVisibleFlowersCount();
    this.visibleFlowers = this.filterType.slice(0, this.numVisible);
    window.addEventListener("resize", (event) => {
      this.onResize(event);
    })
  }

  // Show more/Show less method with media queries
  // toggleShowMore() {
  //   this.showMore = !this.showMore;
  //   if (this.showMore) {
  //     if (window.innerWidth < 480) {
  //     this.numVisible = Math.min(this.numVisible + 4, this.filterType.length);
  //     } 
  //     else if (window.innerWidth < 769){
  //     this.numVisible = Math.min(this.numVisible + 6, this.filterType.length);
  //   } 
  //     else {
  //     this.numVisible = Math.min(this.numVisible + 9, this.filterType.length);
  //   } 
  //   } else {
  //     if(window.innerWidth < 480) {
  //       this.numVisible = Math.min(this.numVisible -4, this.getVisibleFlowersCount(), this.filterType.length);
  //     }
  //     else if (window.innerWidth < 769) {
  //       this.numVisible = Math.min(this.numVisible -6, this.getVisibleFlowersCount(), this.filterType.length);
  //     } else {
  //       this.numVisible = Math.min(this.numVisible -9, this.getVisibleFlowersCount(), this.filterType.length);
  //     }
  
  //   }
  //   if (this.numVisible < this.filterType.length) {
  //     this.showMore = false;
  //   } 
  //   this.visibleFlowers = this.filterType.slice(0, this.numVisible);
  
  // }

  // Only Show more with media queries
  toggleShowMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      if (window.innerWidth < 480) {
      this.numVisible = Math.min(this.numVisible + 4, this.filterType.length);
      } 
      else if (window.innerWidth < 769){
      this.numVisible = Math.min(this.numVisible + 6, this.filterType.length);
    } 
      else {
      this.numVisible = Math.min(this.numVisible + 9, this.filterType.length);
    } 
    } else {
     this.showMore = true;
    }
    if (this.numVisible < this.filterType.length) {
      this.showMore = false;
    }
    this.visibleFlowers = this.filterType.slice(0, this.numVisible);
  
  }

  getVisibleFlowersCount() {
    if (window.innerWidth < 480) {
      return 4;
    } else if (window.innerWidth < 769) {
      return 6;
    } else {
      return 9;
    }
  }

  onResize(event: any) {
this.numVisible = this.getVisibleFlowersCount();
this.visibleFlowers = this.filterType.slice(0, this.numVisible);
  }
}
