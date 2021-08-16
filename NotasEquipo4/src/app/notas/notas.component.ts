import { Component, OnInit } from '@angular/core';
import { Note } from '../notes/notes.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit{
  notes: Note[]=[];
  constructor(private userService: UserService) { }

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


}
