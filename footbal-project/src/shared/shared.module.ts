import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { CarouselModule } from 'primeng/carousel';
import { FootballService } from './services/football.service';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselComponent } from './components/carousel/carousel.components';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CommonModule,
    CarouselModule,
    SkeletonModule
  ],
  providers: [ThemeService, LoginService, FootballService],
  bootstrap: [],
  exports:[
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PageNotFoundComponent,
    HeaderComponent,
    CarouselModule,
    SkeletonModule,
    CarouselComponent
  ]
})
export class SharedModule { }
