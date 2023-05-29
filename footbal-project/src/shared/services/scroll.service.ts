import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ScrollService {
    private scrollPositionSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    scrollPosition$ = this.scrollPositionSubject.asObservable();
    constructor() {}
  
  
    scrollToTop(): void {
      const scrollDuration = 500; // Adjust the duration as needed
      const scrollStep = -window.pageYOffset / (scrollDuration / 15);
  
      const scrollInterval = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(scrollInterval);
        }
        window.scrollBy(0, scrollStep);
        this.scrollPositionSubject.next(window.pageYOffset);
      }, 15);
    }
    scrollToBottom(): void {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollDuration = 500; // Adjust the duration as needed
      const scrollStep = (scrollHeight - window.pageYOffset - windowHeight) / (scrollDuration / 15);
    
      const scrollInterval = setInterval(() => {
        if (window.pageYOffset + windowHeight >= scrollHeight) {
          clearInterval(scrollInterval);
        }
        window.scrollBy(0, scrollStep);
        this.scrollPositionSubject.next(window.pageYOffset);
      }, 15);
    }
    isAtBottomOfWindow(): boolean {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const bodyHeight = document.body.scrollHeight;
        // Check if the user is at the bottom of the window
        return (scrollY + windowHeight) >= bodyHeight;
    }

    isAtTopOfWindow(): boolean {
        const scrollY = window.scrollY || window.pageYOffset;
        return scrollY === 0;
    }
  }
  