import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/shared/services/theme.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']  
  })
  export class LoginComponent implements OnInit{
    theme: string = '';
    constructor( private themeService: ThemeService){}
    ngOnInit(): void {
      this.theme =  this.themeService.getCurrentTheme();
    }

}
