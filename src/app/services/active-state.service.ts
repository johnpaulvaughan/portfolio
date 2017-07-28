import {Injectable} from "@angular/core";
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";

@Injectable()
export class ActiveStateService {

  private stateName : string;
  private backButton: boolean;

  constructor(router : Router, route : ActivatedRoute)
  {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){

        // Traverse the active route tree
        var snapshot = route.snapshot;
        var activated = route.firstChild;
        if(activated != null) {
          while (activated != null) {
            snapshot = activated.snapshot;
            activated = activated.firstChild;
          }
        }

        // Try finding the info from the route data
        this.stateName = snapshot.data['name'] || "unnamed";
        this.backButton = snapshot.data['menuBackButton'] || false;
      }
    });
  }

  is(name : string) : boolean
  {
    return this.stateName === name;
  }

  get name():string {
    return this.stateName
  }

  get menuBackButton():boolean {
    return this.backButton
  }

}