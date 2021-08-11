import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Register } from '../register/registers.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Register[]=[];
  
  constructor(private apiServices: ApiService) { }
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

}
