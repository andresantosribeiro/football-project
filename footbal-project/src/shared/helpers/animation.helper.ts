import {style, animate } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const pointZeroAnimation = animate('400ms', style({ opacity: 0, transform: 'TranslateY(0px)'}))
export const scrollBottomAnimation =  animate('400ms', style({ opacity: 1, transform: 'TranslateY(50px)'}))
export const scrollTopAnimation = animate('400ms', style({opacity: 1 , transform: 'TranslateY(-50px)'}));



  
