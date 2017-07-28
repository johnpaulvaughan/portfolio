
import {Component} from '@angular/core';

@Component({
  selector: 'menu-back-button',
  styleUrls: ['menu-back-button.component.scss'],
  templateUrl: './menu-back-button.component.html'
})


export class MenuBackButtonComponent {

  constructor() {}

  goBack(event) {
    console.log('project back button was clicked');
    //this.openNav.emit(null);
  }

}










