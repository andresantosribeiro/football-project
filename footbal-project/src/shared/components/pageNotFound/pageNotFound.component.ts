import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'pageNotFound-component',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1}))
      ])
    ])
  ]
})
export class PageNotFoundComponent implements OnInit{
  constructor(
            private router: Router,
  ){
  }
 
  
  ngOnInit(): void { }

  goBack(){
    this.router.navigateByUrl('/home')
  }
}
