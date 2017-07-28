import {Component,HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../../animations/animations';


@Component({
    selector: 'about-container',
    animations: [ slideInDownAnimation ],
    styleUrls: ['about.component.scss'],
    templateUrl: './about.component.html'
})

export class AboutComponent {

@HostBinding('@routeAnimation') routeAnimation = true;
@HostBinding('style.display')   display = 'block';
@HostBinding('style.position')  position = 'relative';

}  