import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Register } from '../register/registers.module';
import { Note } from '../notes/notes.module';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: Register[]=[];
  notes: Note[]=[];
  arregloNotas: Note[]=[];

  constructor(private router: Router) { 
    this.users = JSON.parse(localStorage.users||"[]");
    this.notes = JSON.parse(localStorage.notes||"[]");
  }

  setUser(user: Register){ // users POST
    this.users.push(user);
    console.log(this.users)
    localStorage.users = JSON.stringify(this.users);
    this.router.navigateByUrl("/login")
  }
  setNote(note: Note){ // poner Nota en localStorage
    note.emailUser=localStorage.emailLogged;
    this.notes.push(note);
    console.log(this.notes)
    localStorage.notes = JSON.stringify(this.notes);
    this.router.navigateByUrl("/notas")
  }
  //------

  getUsers(): Register[]{ // users POST
    this.users = JSON.parse(localStorage.users || "[]")
    return this.users
  }
  getNotes(): Note[]{ // notes POST
    this.notes = JSON.parse(localStorage.notes)
    return this.notes
  }
  getByEmail(): Note[]{ // notes POST
    const arregloNotas = JSON.parse(localStorage.notes)
    return arregloNotas.filter((e:{emailUser: string;})=> e.emailUser==localStorage.emailLogged)
  }

logIn(email: string, password: string): boolean {​​ // /login POST    
  localStorage.removeItem('emailLogged');
  this.users = JSON.parse(localStorage.users || "[]");    
  let emails = this.users.map(function (e) {​​ return e.email }​​)   
  let passwords = this.users.map(function (e) {​​ return e.password }​​)    
  let pos = emails.indexOf(email)
  if (pos != -1) {​​      
    if (passwords[pos] === password) {​​
      localStorage.isLogIn =1;
      localStorage.emailLogged=email;
      this.router.navigateByUrl("/users")
      return true
    }​​
    else{​​
      localStorage.isLogIn =0;
      //alert("No tienes acceso. Please Log In");
      //this.router.navigate(["login"],{queryParams: {back_url: this.router.url}})
      return false
    }​​
  }​​ else {​​
    localStorage.isLogIn =0;
    //alert("No tienes acceso. Please Log In");
    // this.router.navigate(["login"],{queryParams: {back_url: this.router.url}})
    return false;
  }​
}​​
getIsLogin(): Number{​​    
    return parseInt(localStorage.isLogIn) || 0;
  }​​

logOut(){

}

}
