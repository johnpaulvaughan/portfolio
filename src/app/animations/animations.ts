import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.5s 0.25s ease-in',style({ opacity: 1 })) 
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('0.25s ease-out',style({ opacity: 0 })) 
    ])
  ]); 


export const fadeInAnimation: AnimationEntryMetadata =
  trigger('fadeInOnLoad', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.25s ease-in',style({ opacity: 1 })) 
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('0.25s ease-out',style({ opacity: 0 })) 
    ])
  ]); 