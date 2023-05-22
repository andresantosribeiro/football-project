import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/shared/services/login.service";
import { ThemeService } from "src/shared/services/theme.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']  
  })
  export class LoginComponent implements OnInit{
    theme: string = '';
    apiKey: string = 'f0ac2e6d6a35fdf5de93db5ebf0affbd';
    loginGroup: FormGroup = new FormGroup({
        key: new FormControl('', [Validators.required])
    })
    constructor( private themeService: ThemeService,
                 private router: Router,
                 private loginService: LoginService
        ){}
    ngOnInit(): void {
      this.theme =  this.themeService.getCurrentTheme();
    }
    onSubmit(){
        if(this.loginGroup.valid){
            this.loginService.setKey(this.loginGroup.get('key')?.value)
            this.router.navigateByUrl('/home')
        }
    }
}
