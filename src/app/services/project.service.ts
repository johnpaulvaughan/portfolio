import { Injectable } from '@angular/core';
import { casestudies } from '../projects/project-list';
import { stubs } from '../projects/project-list';
import { all } from '../projects/project-list';
import { Project } from '../projects/project.interface';

@Injectable()
export class ProjectService {
    casestudiesPromise = Promise.resolve(casestudies);
    stubsPromise = Promise.resolve(stubs);
    allPromise = Promise.resolve(all);
    
    public getCaseStudies(){
        return this.casestudiesPromise;   
    }

    public getStubs(){
    	return this.stubsPromise; 
    }

    public getOneProject(id: string | string){
         return this.allPromise
            .then(project => project.find(project => project.id === id));    
    }
}