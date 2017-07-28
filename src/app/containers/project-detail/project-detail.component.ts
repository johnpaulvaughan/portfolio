import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../projects/project.interface';

import {slideInDownAnimation} from '../../animations/animations';

//import './project.container.scss';

@Component({
  selector: 'app-project-detail',
  animations: [ slideInDownAnimation ],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    project: Project;

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';

    constructor( private route: ActivatedRoute, private router: Router, private _projectService: ProjectService) {}

    ngOnInit() {
        let id: string = this.route.snapshot.params['id'];
        this._projectService.getOneProject(id).then(project => this.project = project);

        //ensure the window is scrolled to the start of the article
        window.scrollTo(0, 0)
    }
}