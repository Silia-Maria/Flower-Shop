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

  constructor() { }

  ngOnInit(): void {
  }

}
