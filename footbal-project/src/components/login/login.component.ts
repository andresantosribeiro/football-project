import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginService } from "src/shared/services/login.service";
import { ThemeService } from "src/shared/services/theme.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']  
  })
  export class LoginComponent implements OnInit, OnDestroy{
    theme: string = '';
    loginGroup: FormGroup = new FormGroup({
        key: new FormControl('', [Validators.required, Validators.minLength(32)])
    });
    themeSubscription: Subscription = new Subscription();
    constructor( private themeService: ThemeService,
                 private router: Router,
                 private loginService: LoginService
        ){}
    
    ngOnInit(): void {
        this.themeSubscription =  this.themeService.getCurrentTheme().subscribe({next: (theme)=>{
            this.theme = theme
          }});
    }
    onSubmit($event: Event){
        $event.preventDefault();
        if(this.loginGroup.valid){
            this.loginService.setKey(this.loginGroup.get('key')?.value)
            this.router.navigateByUrl('/home')
        }
    }
    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
    get key() { return this.loginGroup.get('key'); }
}
