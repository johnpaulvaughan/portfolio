
import { Component, EventEmitter, Input, Output, HostBinding, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ActiveStateService } from '../../services/active-state.service';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

import 'rxjs/add/operator/filter';


@Component({
	selector: 'logo-burger',
	styleUrls: ['logo-burger.component.scss'],
	host: { '(window:scroll)': 'track($event)' },
	templateUrl: 'logo-burger.component.html',
	animations: [
		trigger('logoState', [
			state('white', style({})),
			state('black', style({})),
			transition('white => black', animate('1ms ease-in')),
			transition('black => white', animate('1ms ease-out'))
		])
	]
})


export class LogoBurgerComponent {
	//private jpvlogo: any
	public logoState: string
	private sub: any
	@ViewChild('logoAnimationPaths') logoAnimationPaths: ElementRef;
	@ViewChild('logosvg') logosvg: ElementRef;
	@Output() openNav: EventEmitter<any> = new EventEmitter()
	@Output() closeNav: EventEmitter<any> = new EventEmitter()
	@HostBinding('class.NavIsOpen') @Input() NavIsOpen: boolean

	constructor(private sanitizer: DomSanitizer, private state: ActiveStateService, private router: Router) {
		//this.jpvlogo = this.sanitizer.bypassSecurityTrustHtml(require("../images/jpv5.svg"));
	}

	ngOnInit() {
		this.checkLogoColour()
		this.sub = this.router.events.filter(e => e instanceof NavigationEnd).subscribe((event) => { this.checkLogoColour() })
	}

	track($event: Event) {
		//switch out logo when passed homepage
		this.checkLogoColour();
	}

	showNav(event) {
		console.log('showMenu was clicked')
		this.openNav.emit(null)
	}
	hideNav(event) {
		console.log('hideMenu was clicked')
		this.closeNav.emit(null);
	}

	checkLogoColour() {
		//fix the colour for the splash / welcome page.
		//console.log('test: ' + this.state.name)
		 if (window.innerWidth < 768) { //go white on mobile
		 	this.logoState = 'white';
		 }
		else if (!this.state.name) { //if we're unsure of the state, go white.
			this.logoState = 'white';
		} else if (this.state.name == 'hello') { 
			this.logoState = window.pageYOffset > window.innerHeight ? 'black' : 'white'
		} 
		else if (this.state.name == 'work') this.logoState = window.pageYOffset > window.innerHeight/2 ? 'black' : 'white'
		else if (this.state.name == 'contact') this.logoState = 'white'

		else {
			this.logoState = 'black';
		}
	}

	animatingLogo(animate: AnimationEvent) {
		if (animate.toState == 'white') {
			this.logoState = 'white';
		}

	}


}









