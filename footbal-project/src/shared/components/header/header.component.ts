import { Component, OnInit } from '@angular/core';
import {
    trigger,
    style,
    state,
    animate,
    transition
  } from '@angular/animations';
import { ThemeService } from 'src/shared/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('theme', [
        state('light', style({transform: 'rotate(0deg)', backgroundColor: 'white'})),
          state('dark', style({transform: 'rotate(360deg)', color: 'white', backgroundColor: 'black'})),
          transition('light => dark', [
            animate('0.5s')
          ]),
          transition('dark => light', [
            animate('0.5s')
          ]),
          
    ]),
    trigger('accordion', [
        state('collapsed', style({ height: '0', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('collapsed <=> expanded', animate('300ms ease-in-out'))
      ])
  ]
  
})
export class HeaderComponent implements OnInit{
    isDark: string = 'light';
    isExpanded: boolean = false;
    constructor( private themeService: ThemeService,
                 private router: Router 
    ){}
    ngOnInit(): void {

    }
    changeTheme($event: any){
      this.isDark = this.isDark == 'light' ? 'dark' : 'light'
       this.isDark == 'light' ? this.themeService.changeTheme('light') : this.themeService.changeTheme('dark');
    }
    toggleAccordion(): void {
        this.isExpanded = !this.isExpanded;
    }

    goToHome(){
      this.router.navigateByUrl('/home')
    }
}
