import { Component, OnInit } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit{
  notes: NotasComponent[]=[];

  constructor(private notesComponet: NotesComponent) { }

  ngOnInit(): void {
    this.getNote()
  }

  async getNote(){
    try{
      this.notes = await this.notesComponet.ngOnInit()
    }catch(err){
      console.log(err)
    }
  }

}
