import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { ActiveStateService } from '../../services/active-state.service';

@Component({
  selector: 'header-menu',
  styleUrls: ['menu.component.scss'],
  templateUrl: './menu.component.html'
})


export class MenuComponent {
  public navToggle: boolean;
  private sub: any;
  public backButton: boolean;

  constructor(public router: Router, private state: ActiveStateService) {
    this.navToggle = false;
    this.backButton = false;
  }

  ngOnInit() {
    //need to wrap this in a subscription or it doesn't update - the menu is never destroyed.

    this.sub = this.router.events
    .filter(e => e instanceof NavigationEnd)
    .subscribe((data:NavigationEnd) => {
        //console.log(this.state.menuBackButton)
        this.backButton = this.state.menuBackButton
      })
  
}

  openNav(event: any = null) {
    this.navToggle = true;
  }

  closeNav(event: any = null) {
    this.navToggle = false;
  }

}










