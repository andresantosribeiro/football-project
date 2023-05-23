import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
    key: string = '';
    constructor(){}

    setKey(loginKey: string){
        this.key = loginKey;
    }
    isAuthenticated(){
       return this.key ? true : false;
    }
    getKey(){
      return this.key;
    }
}