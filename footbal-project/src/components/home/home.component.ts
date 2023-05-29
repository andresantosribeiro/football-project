import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { FootballService } from 'src/shared/services/football.service';
import { ThemeService } from 'src/shared/services/theme.service';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent implements OnInit, OnDestroy{
    theme: string = '';
    countries: any;
    league: any;
    themeSubscription: Subscription = new Subscription();
    responsiveOptions: Array<any> = [];
    constructor( private themeService: ThemeService,
                 private footBallService: FootballService 
      ){}
  
    async ngOnInit() {
      this.themeSubscription =  this.themeService.getCurrentTheme().subscribe({next: (theme)=>{
        this.theme = theme
      }});
      await this.footBallService.getCountries().pipe(take(1)).subscribe((value: any)=>{
      this.countries = value.response;
      })
     
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
    ngOnDestroy(): void {
      this.themeSubscription.unsubscribe();
    }
}
