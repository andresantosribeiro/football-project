import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [ThemeService],
  bootstrap: [],
  exports:[
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PageNotFoundComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
