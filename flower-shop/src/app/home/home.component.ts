import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'; 
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

  // Bestseller click for smaller screens
  isMobile: boolean = window.innerWidth < 769;

  @HostListener('window:resize', ['$event']) 
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 769;
  }

  //Bestseller change image -> Small screens: click
  onMobileClick (imageName: string) {
    const matchingFlower = this.flowers.find(flower => flower.name === imageName && flower.bestseller === true);
    if (matchingFlower !== undefined) {
      if (this.displayedImage === matchingFlower.img) {
        this.router.navigate(['/details', matchingFlower.id], {queryParams: {fromHome: true}});
      } else {
        this.displayedImage = matchingFlower.img;
      }
    } 
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.bestsellers = this.flowers.filter(flower => flower.bestseller === true);
    this.displayedImage = this.bestsellers[0].img;
  }

  //Bestseller change image -> big screens: hover
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
