import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

const routes: Routes=[
  {path:'login', component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

@Injectable({
  providedIn: 'root'
})
export class AppRoutingService {

  constructor() { }
}
