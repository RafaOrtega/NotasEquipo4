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
    console.log(nota.emailUser);
    console.log(this.notes);
    if(nota.emailUser==localStorage.emailLogged){
      if(confirm("Seguro de borrar la nota? ")) {
        let notapos= this.notes.indexOf(nota); 
        console.log(notapos);  
        //this.notes.splice(notapos,1);
        //let notasArray=JSON.parse(localStorage.notes);
       // localStorage.removeItem("notes");
        JSON.parse(localStorage.notes).splice(notapos,1);
        console.log(this.notes);
      }
    }else{
      alert("No puedes eliminar esta nota")
    }
  }

}
