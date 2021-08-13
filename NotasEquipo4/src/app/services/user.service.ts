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
  notesByEmail: Note[]=[];
  //validar: String="";

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

  nuevaNota(note: Note){
    return new Promise((resolve,reject)=>{
      if(note.tituloNota != null){
        this.apiServices.setNote(note)
        resolve("Exito de operacion, nota guardada")
      }else{
        reject("Nota no guardado")
      }
    })
  }
getUsers(){
  return new Promise<Register[]>((resolve, reject)=>{
    this.users = this.apiServices.getUsers();
    resolve(this.users);
  })
}

obtenerNotes(){
  return new Promise<Note[]>((resolve, reject)=>{
    this.notes = this.apiServices.getNotes();
    resolve(this.notes);
  })
}
obtenerNotesByEmail(){
  return new Promise<Note[]>((resolve, reject)=>{
    this.notesByEmail = this.apiServices.getByEmail();
    resolve(this.notesByEmail);
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

