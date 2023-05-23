import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FootballService } from 'src/shared/services/football.service';
import { ThemeService } from 'src/shared/services/theme.service';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent implements OnInit{
    theme: string = '';
    countries: any;
    league: any;
    responsiveOptions: Array<any> = [];
    constructor( private themeService: ThemeService,
                 private footBallService: FootballService 
      ){}
    async ngOnInit() {
      this.theme =  this.themeService.getCurrentTheme();
      await this.footBallService.getCountries().pipe(take(1)).subscribe((value: any)=>{
      this.countries = value.response;
      console.log(this.countries)
      })
      // await this.footBallService.getLeague('').pipe(take(1)).subscribe((value: any)=>{
      //   this.league = value.response;
      //   console.log(this.league)
      //   })
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
}
