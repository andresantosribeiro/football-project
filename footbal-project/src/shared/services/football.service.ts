import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService{
    key: string = ''
    headerOptions: HttpHeaders = new HttpHeaders();
    constructor(
        private loginService: LoginService,
        private http: HttpClient
    ){
        this.key = this.loginService.getKey();
        this.headerOptions = this.headerOptions.append('x-apisports-key', this.key)
        this.headerOptions = this.headerOptions.append('x-rapidapi-host', 'v3.football.api-sports.io')
        this.headerOptions = this.headerOptions.append('x-rapidapi-key', this.key)
        
    }

    getCountries(): Observable<any>{
        return this.http.get('https://v3.football.api-sports.io/countries', {headers: this.headerOptions})
    }
    getSeasons(): Observable<any>{
        return this.http.get('https://v3.football.api-sports.io/leagues/seasons', {headers: this.headerOptions})
    }
    getLeagues(){
        return this.http.get(`https://v3.football.api-sports.io/leagues`, {headers: this.headerOptions})
    }
    getTeams(leagueId: number){
        return this.http.get(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=2021`, {headers: this.headerOptions})
    }
  
}