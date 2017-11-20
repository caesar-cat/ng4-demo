import {trigger,state,animate,transition,style, keyframes,  AnimationEntryMetadata} from '@angular/core';
export const fadeInAnimation: AnimationEntryMetadata =  trigger('fadeInAnimation', [
    state('*',
      style({
        opacity: 1,
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
      }))
    ])
  ]);

export const hoverScaleAnimation = trigger('hoverScaleAnimation', [
    state('inactive', style({
      transform: 'scale(1)'
    })),
    state('active',   style({
      transform: 'scale(1.03)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
])


export const bounceInAnimation = trigger('bounceInAnimation', [
  state('in', style({transform: 'scale3d(1, 1, 1)'})),
  transition('void => *', [
    animate(400, keyframes([
      style({opacity: 0, transform: 'scale3d(.3, .3, .3)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0}),
      style({ transform: 'scale3d(1.1, 1.1, 1.1)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.2}),
      style({ transform: 'scale3d(.9 , .9, .9)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.4}),
      style({ transform: 'scale3d(1.03, 1.03, 1.03)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.6}),
      style({ transform: 'scale3d(.97, .97, .97)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.8}),
      style({ transform: 'scale3d(1, 1, 1)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset: 1}),
    ]))
  ]),
])

export const bounceInUpAnimation = trigger('bounceInUpAnimation', [
  state('in', style({transform: 'translate3d(0, 0, 0)'})),
  transition('void => *', [
    animate(600, keyframes([
      style({transform: 'translate3d(0, 3000px, 0)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0}),
      style({ transform: 'translate3d(0, -20px, 0)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.6}),
      style({ transform: 'translate3d(0, 10px, 0)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.75}),
      style({ transform: 'translate3d(0, -5px, 0)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset:0.9}),
      style({ transform: 'translate3d(0, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', offset: 1}),
    ]))
  ]),
])

