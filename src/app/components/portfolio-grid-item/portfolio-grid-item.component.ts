import {Component,Input} from '@angular/core';
import { Project } from '../../projects/project.interface';

@Component({
  selector: 'portfolio-grid-item',
  styleUrls: ['portfolio-grid-item.component.scss'],
  templateUrl: './portfolio-grid-item.component.html'
})


export class PortfolioGridItemComponent {
  @Input() project:Project;

  constructor() {

  }

  helloClicked(event) {
    console.log('clicked');
  }

}