import { Component, OnInit } from '@angular/core';
import { flowers } from "../flowers";
import { Idflowers } from '../Idflowers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flowers: Idflowers [] = flowers;

  // bestseller array
  bestsellers: Idflowers []= this.flowers.filter(flower => flower.bestseller === true);

  // default image bestseller[0]
  displayedImage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.bestsellers = this.flowers.filter(flower => flower.bestseller === true);
    this.displayedImage = this.bestsellers[0].img;
  }

  //Hover effect -> change image
  onMouseEnter(imageName: string) {
    const matchingFlower = this.flowers.find(flower => flower.name === imageName && flower.bestseller === true);
    if(matchingFlower !== undefined) {
      this.displayedImage = matchingFlower.img;
    }
  }

  // back to default image 
  onMouseLeave() {
    this.displayedImage;
  }
}
