import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsCreateComponent } from './films-create/films-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: FilmsPageComponent
  },
  {
    path: 'films/create',
    component: FilmsCreateComponent
  },
  {
    path: 'films/login',
    component: LoginComponent
  },
  {
    path: 'films/register',
    component: RegisterComponent
  },
  {
    path: 'films/:id',
    component: FilmsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsLayoutRoutingModule { }
