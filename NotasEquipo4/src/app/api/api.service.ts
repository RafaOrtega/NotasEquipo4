import { Injectable } from '@angular/core';

import { Register } from '../register/registers.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: Register[]=[];

  constructor() { 
    this.users = JSON.parse(localStorage.users||"[]");
  }

  setUser(user: Register){ // users POST
    this.users.push(user);
    console.log(this.users)
    localStorage.users = JSON.stringify(this.users);
  }

  getUsers(): Register[]{ // users POST
    this.users = JSON.parse(localStorage.users)
    return this.users
  }

  logIn(){} //login POST
  logOut(){} //login POST

}
