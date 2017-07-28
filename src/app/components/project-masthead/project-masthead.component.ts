import { Component, Input } from '@angular/core';
import { Project } from '../../projects/project.interface';
import {fadeInAnimation} from '../../animations/animations';

@Component({
	selector: 'project-masthead',
	animations: [ fadeInAnimation ],
	styleUrls: ['project-masthead.component.scss'],
	templateUrl: './project-masthead.component.html'
})


export class ProjectMastheadComponent {
	@Input() project: Project;

	constructor() { }

	helloClicked(event) {
		console.log('clicked');
	}

}