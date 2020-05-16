import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: 'films',
    loadChildren: './films-layout/films-layout.module#FilmsLayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
