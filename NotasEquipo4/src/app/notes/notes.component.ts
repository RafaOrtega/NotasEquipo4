import { Component, OnInit } from '@angular/core';
import { Note } from './notes.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  //notes: Note[]= [];
  note: Note= {
    tituloNota: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    tipo: ""
  };

  noteForm: FormGroup;
  message: any =""

  constructor(private userService: UserService, private router: Router) { 
    this.noteForm= new FormGroup({
    tituloNota: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required]),
    fechaInicio: new FormControl('',[Validators.required]),
    fechaFin: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  //onSubmit(fg: NgForm): void{
async onSubmit({value,valid}:{value: Note, valid:boolean}){ 
     console.log(value,valid)
     if(valid){
      try{
        this.message= await this.userService.nuevaNota(value)
        console.log(typeof this.message,this.message)
      }catch(err){
        console.log(err)
      }
      this.noteForm.reset()
    }else{
      this.message = "Tienes campos invalidos"
      console.log(this.noteForm)
    }
  }

    // destructuring
    /*
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
    console.log(this.notes)*/

  /*goBack(): void{
    this.location.back();
  }*/

}
