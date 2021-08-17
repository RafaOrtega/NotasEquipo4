import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../notes/notes.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
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
      console.log(notasArray)
    }
    else{
      alert("No puedes modificar este usuario")
    }
  }
 public eliminarNota(nota: Note){
  if(nota.emailUser==localStorage.emailLogged){
    if(confirm("Seguro de borrar la nota? ")) {
      let notapos= this.notas.indexOf(nota); 
      let notasArray=JSON.parse(localStorage.notes);
      notasArray.splice(notapos, 1)
      localStorage.setItem("notes", JSON.stringify(notasArray));
      window.location.reload();
    }
  }else{
    alert("No puedes eliminar esta nota")
    }
  }
}
