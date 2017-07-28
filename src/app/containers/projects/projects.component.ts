import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../animations/animations';


@Component({
	selector: 'app-projects',
	animations: [slideInDownAnimation],
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	@HostBinding('style.position') position = 'relative';
}  