import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new Subject<string>;

  getCurrentTheme(): Observable<string> {
    return this.currentTheme.asObservable();
  }

  changeTheme(theme: string): void {
     this.currentTheme.next(theme);
  }
}