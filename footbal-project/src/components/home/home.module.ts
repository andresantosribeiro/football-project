import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent, NgbModule]
})
export class HomeModule { }
