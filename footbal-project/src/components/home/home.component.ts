import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent implements OnInit{
    theme: string = '';
    constructor( private themeService: ThemeService){}
    ngOnInit(): void {
      this.theme =  this.themeService.getCurrentTheme();
    }
}
