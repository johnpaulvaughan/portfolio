import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../projects/project.interface';
import { Router } from '@angular/router';


//import './portfolio-grid.component.scss';

@Component({
  selector: 'portfolio-grid',
  styleUrls: ['portfolio-grid.component.scss'],
  templateUrl: './portfolio-grid.component.html'
})


export class PortfolioGridComponent implements OnInit {
  casestudies: Project[];
  stubs: Project[];
  @Input() showIntro: boolean;

  constructor(public _projectService: ProjectService, public router: Router) { }

    ngOnInit() { 
        this._projectService.getCaseStudies().then(projects => this.casestudies = projects);
        this._projectService.getStubs().then(projects => this.stubs = projects);
    }

  projectClicked(item, i) {
    console.log('clicked the project');
    //console.log(item);
    this.router.navigate(['./project/'+item.id]);
  }

}