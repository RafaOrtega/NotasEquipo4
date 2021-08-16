import { Component, OnInit } from '@angular/core';
import { Note } from '../notes/notes.module';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit{
  notes: Note[]=[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getNotee();
  }
async getNotee(){
  try{
    this.notes = await this.userService.obtenerNotes();

  }catch(err){

  }
}

  public eliminarNota(nota: Note){
  if(nota.emailUser==localStorage.emailLogged){
    if(confirm("Seguro de borrar la nota? ")) {
      let notapos= this.notes.indexOf(nota); 
      let notasArray=JSON.parse(localStorage.notes);
      notasArray.splice(notapos, 1)
      localStorage.setItem("notes", JSON.stringify(notasArray));
      window.location.reload();
    }
  }else{
    alert("No puedes eliminar esta nota")
    }
  }

   //METODO PARA EDITAR LAS NOTAS DE MANERA ESTATICA
  public editarNota(nota : Note){
    if(nota.emailUser == localStorage.emailLogged){
      let notasArray = JSON.parse(localStorage.notes);
      var nuevoTitulo = "Este es el nuevo titulo nuevo"
      notasArray.forEach(function(item:any) {
        if(item.emailUser == localStorage.emailLogged)
          item.tituloNota = nuevoTitulo;
          localStorage.setItem("notes", JSON.stringify(notasArray));
      });
      console.log(notasArray)
      //this.router.navigate(["new-notes"],{queryParams: {back_url: this.router.url}})
    }
    else{
      alert("No puedes modificar esta nota")
    }
  }

  


}
