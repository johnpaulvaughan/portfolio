import { Component, Input } from '@angular/core';
import { Project } from '../../projects/project.interface';

//import './project-overview.component.scss';

@Component({
  selector: 'project-overview',
  styleUrls: ['project-overview.component.scss'],
  templateUrl: './project-overview.component.html'
})


export class ProjectOverviewComponent {
  @Input() project: Project;

  constructor() { }

  helloClicked(event) {
    console.log('clicked');
  }

}