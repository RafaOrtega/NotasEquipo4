import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../notes/notes.module';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-notas-update',
  templateUrl: './notas-update.component.html',
  styleUrls: ['./notas-update.component.css']
})
export class NotasUpdateComponent implements OnInit {

  notas: Note[]=[];
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.getNotee();
  }

  async getNotee(){
    try{
      this.notas = await this.userService.obtenerNotesByEmail();
  
    }catch(err){
  
    }
  }
  showalertbonita(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu nota ha sido editada',
      showConfirmButton: false,
      timer: 3000
    })
  }
  public editarNota(nota : Note){
    if(nota.emailUser == localStorage.emailLogged){
      var nuevoTitulo=  (<HTMLInputElement>document.getElementById("tituloNota")).value
      var nuevaDescripcion = (<HTMLInputElement>document.getElementById("descripcion")).value
      var nuevaFechaIn = (<HTMLInputElement>document.getElementById("fechaInicio")).value
      var nuevaFechaFin = (<HTMLInputElement>document.getElementById("fechaFin")).value
      var nuevoTipo = (<HTMLInputElement>document.getElementById("tipo")).value
      let notasArray = JSON.parse(localStorage.notes);
      notasArray.forEach(function(item: Note) {
        if(item.emailUser == localStorage.emailLogged){
          item.tituloNota = nuevoTitulo;
          item.descripcion = nuevaDescripcion;
          item.fechaInicio = nuevaFechaIn;
          item.fechaFin = nuevaFechaFin;
          item.tipo = nuevoTipo;
          localStorage.setItem("notes", JSON.stringify(notasArray));
          
        }
      });
      this.router.navigateByUrl("/notas")
      this.showalertbonita()
      /*console.log(notasArray)*/
    }
    else{
      alert("No puedes modificar este usuario")
    }
  }


}
