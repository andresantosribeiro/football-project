import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { PageNotFoundComponent } from 'src/shared/components/pageNotFound/pageNotFound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
