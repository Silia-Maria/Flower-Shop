import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Output() filterType = new EventEmitter<string>();

  // filterByType (type: string) {
  // this.filterType.emit(type);
  // }
  

  constructor() { }

  ngOnInit(): void {
  }


}
