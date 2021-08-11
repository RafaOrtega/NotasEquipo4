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

logIn(email: string, password: string): boolean {​​ // /login POST    
  this.users = JSON.parse(localStorage.users || "[]");    
  let emails = this.users.map(function (e) {​​ return e.email }​​)   
  let passwords = this.users.map(function (e) {​​ return e.password }​​)    
  let pos = emails.indexOf(email)   
  if (pos != -1) {​​      
    if (passwords[pos] === password) {​​
      localStorage.isLogIn =1;
      return true
    }​​
    else{​​
      localStorage.isLogIn =0;
      return false
    }​​
  }​​ else {​​
    localStorage.isLogIn =0;
    return false;
  }​
}​​

getIsLogin(): Number{​​    
    return parseInt(localStorage.isLogIn);
  }​​

logOut(){

}

}
