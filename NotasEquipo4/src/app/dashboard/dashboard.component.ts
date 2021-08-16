import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Register } from '../register/registers.module';
import { UserService } from '../services/user.service';
import { Note } from '../notes/notes.module';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users: Register[]=[];
notes: Note[]=[];
arregloUsuario:[]=[]
  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers(){
    try{
      this.users = await this.userServices.getUsers()
    }catch(err){

    }
   
  }
  NotesUser(){
    const arregloUsuarios = JSON.parse(localStorage.users)
    //const arregloNotas = JSON.parse(localStorage.notes)
    //let comparacion = arregloNotas.find((a: {emailUser: string;})=>a.emailUser=localStorage.emailLogged)
    if(arregloUsuarios.find((e: { email: string; })=>e.email== localStorage.emailLogged)){
      //muestre todas las notas almacenadas
      //console.log(arregloUsuarios)
      alert("los correos de usuario y notas coinciden")
      //arregloNotas.filter((e:{emailLogged: string;})=> e.emailLogged==localStorage.emailLogged)
      this.getNotas();
    }else{
      alert("email no esta")
    }
  }
  async getNotas(){
    try{
      this.notes = await this.userServices.obtenerNotesByEmail()
    }catch(err){

    }
  }


}
