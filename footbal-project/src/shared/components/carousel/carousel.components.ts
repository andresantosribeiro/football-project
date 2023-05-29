import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription, take, throwError } from 'rxjs';
import { FootballService } from 'src/shared/services/football.service';
import { ThemeService } from 'src/shared/services/theme.service';
import {sequence, trigger, style, transition, state } from '@angular/animations';
import { pointZeroAnimation, scrollBottomAnimation, scrollTopAnimation } from 'src/shared/helpers/animation.helper';
import { ScrollService } from 'src/shared/services/scroll.service';

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger('scrollAnimation', [
        state('initial', style({ })),
          state('goTop', style({ })),
          state('goBottom', style({})),
          transition('* => goTop', sequence([pointZeroAnimation, scrollTopAnimation])),
          transition('* => goBottom', sequence([pointZeroAnimation, scrollBottomAnimation]))
        ])
      ]
})
export class CarouselComponent implements OnInit {
    theme: string = '';
    @Input('countries') countries: any;
    isCountryLoaded: boolean = false;
    responsiveOptions: Array<any> = [];
    leagues: Array<any> = new Array<any>;
    isLeagueLoaded: boolean = false;
    themeSubscription: Subscription = new Subscription();
    teams: Array<any> = new Array<any>;
    isTeamLoaded: boolean = false;
    isLoading: boolean = false;
    atTheBottom: boolean = false;
    animateScroll: boolean = false;
    scroll: string = 'initial';
    targetElementIds = ['league', 'team'];
    @Input('id') country: any;
    constructor(private themeService: ThemeService, private footBallService: FootballService,
        private scrollService: ScrollService
    ) { }
    async ngOnInit() {
        this.themeSubscription = this.themeService.getCurrentTheme().subscribe({next: (theme) => {this.theme = theme}});
        this.responsiveOptions = [{ breakpoint: '1199px', numVisible: 1, numScroll: 1},
            { breakpoint: '991px', numVisible: 2, numScroll: 1},
            { breakpoint: '767px', numVisible: 1, numScroll: 1}
        ];
    }
    async choosedCountry(name: string) {
        this.isCountryLoaded = true;
        if(this.teams.length > 0 && this.teams.filter((item) => item.team.country.includes(name)).length > 0){
            return;
        }
        this.isLoading = true; 
        this.footBallService.getLeagues().pipe(take(1)).subscribe({ next: (value: any) => {
                let aux: Array<any> = value.response as Array<any>;
                this.leagues = aux.filter((item) => item.country.name.includes(name))
            }, error: (error) => { return throwError(() => { new Error(error) });
            }, complete: () => { this.isLeagueLoaded = true; this.isLoading = false; this.atTheBottom = false;}
        })


    }
    choosedLeague(leagueId: number) {
        this.isLeagueLoaded = true;
        this.isLoading = true;
        this.footBallService.getTeams(leagueId).pipe(take(1)).subscribe({ next: (value: any) => {
                this.teams = value.response as Array<any>;
            }, error: (error) => { return throwError(() => { new Error(error) });},
             complete: () => {
                this.isTeamLoaded = true;
                this.isLoading = false;
                this.atTheBottom = false;
            }
        })
    }

    choosedTeam(teamId: any) {
        console.log(teamId);
    }

    scrollTo() {
        if (this.atTheBottom ) {
            this.scroll = 'top';
            this.scrollService.scrollToTop();
        } else {
            this.scroll = 'bottom';
            this.scrollService.scrollToBottom();
        }

    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.scrollService.isAtBottomOfWindow()) {
            this.atTheBottom = true;
        } else {
            this.atTheBottom = false;
        }
    }

}
