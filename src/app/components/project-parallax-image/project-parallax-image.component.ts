import {Component,Input} from '@angular/core';
import { Project } from '../../projects/project.interface';

@Component({
  selector: 'project-parallax-image',
  styleUrls: ['project-parallax-image.component.scss'],
  templateUrl: './project-parallax-image.component.html'
})


export class ProjectParallaxImageComponent {
  @Input() project:Project;

  //parallaxImage: any;

  constructor() {}

 

}