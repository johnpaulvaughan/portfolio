import { Component, Input } from '@angular/core';
import { Project } from '../../projects/project.interface';

@Component({
  selector: 'portfolio-grid-stub',
  templateUrl: './portfolio-grid-stub.component.html',
  styleUrls: ['./portfolio-grid-stub.component.scss']
})

export class PortfolioGridStubComponent {
  @Input() project:Project;

  constructor() { }


  helloClicked(event) {
    console.log('clicked');
  }


}