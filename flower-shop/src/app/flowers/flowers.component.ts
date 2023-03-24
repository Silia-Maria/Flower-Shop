import { Component, OnInit } from '@angular/core';
import { flowers } from "../flowers";
import { Idflowers } from '../Idflowers';


@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
flowers: Idflowers [] = flowers;

  constructor() { 
  //    function filterFlowers() {
  //     if (flowers.type == "Luxury flower") {
        
  //     }
    
  // };
  }

  ngOnInit(): void {

  }
 

}
