import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'light';

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  toggleTheme(): string {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    return this.currentTheme
  }
}