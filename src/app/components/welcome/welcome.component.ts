import { Component, ElementRef, ViewChild, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import * as anime from 'animejs'
//import gsap

@Component({
	selector: 'jpv-welcome',
	styleUrls: ['welcome.component.scss'],
	templateUrl: 'welcome.component.html'
})

export class WelcomeComponent implements OnInit {
	animateText:boolean;

	constructor(public element: ElementRef, private sanitizer: DomSanitizer) {
		this.animateText = false;
	}

	ngOnInit() { this.animateText = true }
}