import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'; 
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavExpanded = false;
  isHomePage = false;
  private routerSub!: Subscription;
 
  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.routerSub = this.router.events.subscribe((event) => {
    if(event instanceof NavigationEnd) {
      this.isHomePage = this.router.url === '/';
     
    }
   });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  onNavToggle(): void {
    this.isNavExpanded = !this.isNavExpanded;
  }

}
