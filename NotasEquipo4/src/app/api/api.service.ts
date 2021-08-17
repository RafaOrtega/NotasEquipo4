import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Register } from '../register/registers.module';
import { Note } from '../notes/notes.module';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getByEmail(): any {
    throw new Error('Method not implemented.');
  }
  users: Register[]=[];
  notes: Note[]=[];

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
  showalertbonita(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu nota ha sido guardada',
      showConfirmButton: false,
      timer: 3000
    })
  }
  setNote(note: Note){ // poner Nota en localStorage
    this.notes.push(note);
    console.log(this.notes)
    localStorage.notes = JSON.stringify(this.notes);
    this.router.navigateByUrl("/notas")
    this.showalertbonita()
  }
  //------

  getUsers(): Register[]{ // users POST
    this.users = JSON.parse(localStorage.users)
    return this.users
  }
  getNotes(): Note[]{ // users POST
    this.notes = JSON.parse(localStorage.notes)
    return this.notes
  }


logIn(email: string, password: string): boolean {​​ // /login POST    
  this.users = JSON.parse(localStorage.users || "[]");    
  let emails = this.users.map(function (e) {​​ return e.email }​​)   
  let passwords = this.users.map(function (e) {​​ return e.password }​​)    
  let pos = emails.indexOf(email)   
  if (pos != -1) {​​      
    if (passwords[pos] === password) {​​
      localStorage.isLogIn =1;
      this.router.navigateByUrl("/users")
      return true
    }​​
    else{​​
      localStorage.isLogIn =0;
      alert("No tienes acceso. Please Log In");
      this.router.navigate(["login"],{queryParams: {back_url: this.router.url}})
      return false
    }​​
  }​​ else {​​
    localStorage.isLogIn =0;
    alert("No tienes acceso. Please Log In");
    this.router.navigate(["login"],{queryParams: {back_url: this.router.url}})
    return false;
  }​
}​​

getIsLogin(): Number{​​    
    return parseInt(localStorage.isLogIn);
  }​​

logOut(){

}

}
