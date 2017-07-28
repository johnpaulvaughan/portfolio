import {Component,HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';


@Component({
    selector: 'landing-container',
    animations: [ slideInDownAnimation ],
    templateUrl: './landing.component.html',
    styleUrls:['./landing.component.scss']
})

export class LandingComponent {

@HostBinding('@routeAnimation') routeAnimation = true;
@HostBinding('style.display')   display = 'block';
@HostBinding('style.position')  position = 'relative';



}  