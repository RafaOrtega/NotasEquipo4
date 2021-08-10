import { Injectable } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes : Routes=[
  {path: "login", component: LoginComponent}
]

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }
}
