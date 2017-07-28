import { Component, Input } from '@angular/core';
import { Project } from '../../projects/project.interface';

@Component({
	selector: 'project-nitty-gritty',
	styleUrls: ['project-nitty-gritty.component.scss'],
	templateUrl: './project-nitty-gritty.component.html'
})


export class ProjectNittyGrittyComponent {
	@Input() project: Project;

	constructor() { }

	helloClicked(event) {
		console.log('clicked');
	}

}