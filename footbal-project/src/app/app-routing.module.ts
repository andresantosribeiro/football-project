import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PageNotFoundComponent } from 'src/shared/components/pageNotFound/pageNotFound.component';
import { AuthGuard } from 'src/shared/services/authGuard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
