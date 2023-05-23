import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FootballService } from 'src/shared/services/football.service';
import { ThemeService } from 'src/shared/services/theme.service';


@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']  
})
export class CarouselComponent implements OnInit{
    theme: string = '';
    @Input('countries') countries: any;
    responsiveOptions: Array<any> = [];
    constructor( private themeService: ThemeService,
      ){}
    async ngOnInit() {
      this.theme =  this.themeService.getCurrentTheme();
      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }
    countryChoosed(country: any){
      console.log(country)
    }
}
