import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Register } from '../register/registers.module';
import { Note } from '../notes/notes.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Register[]=[];
  notes: Note[]=[];
  
  constructor(private apiServices: ApiService, private router: Router) { }
  registertUser(user: Register){
    return new Promise((resolve,reject)=>{
      if (user.email  != null){
        this.apiServices.setUser(user)
        resolve("Exito en la operacion, usuario insertado correctamente")
      } else {
        reject("Valor del email no valido")
      }
    })
  }
getUsers(){
  return new Promise<Register[]>((resolve, reject)=>{
    this.users = this.apiServices.getUsers();
    resolve(this.users);
  })
}

logIn(email: string, password: string){
  return new Promise((resolve,reject)=>{
    let isUser = this.apiServices.logIn(email,password);
    if(isUser){
      resolve(true)
    }else{
      reject(false)
    }
  })
}

isLogin(){
  return this.apiServices.getIsLogin();
}

}

