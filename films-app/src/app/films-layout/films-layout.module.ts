import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsLayoutRoutingModule } from './films-layout-routing.module';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsCreateComponent } from './films-create/films-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FilmsPageComponent, FilmsDetailsComponent, FilmsCreateComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FilmsLayoutRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class FilmsLayoutModule { }
