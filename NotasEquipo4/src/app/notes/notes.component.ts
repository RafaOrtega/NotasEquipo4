import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Note } from './notes.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[]= [];
  note: Note= {
    tituloNota: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    tipo: "",
    estatus: ""
  };

  constructor(private location: Location) { }

  ngOnInit(): void {
    console.log(this.location)
  }

  onSubmit(fg: NgForm): void{

    // destructuring
    
  const {tituloNota,descripcion,fechaInicio,fechaFin,tipo,estatus} = fg.value
    
    this.note= {
      tituloNota:tituloNota,
      descripcion: descripcion,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      tipo: tipo,
      estatus:estatus
    }
    this.notes.push(this.note);
    console.log(this.notes)
  }

  /*goBack(): void{
    this.location.back();
  }*/

}
