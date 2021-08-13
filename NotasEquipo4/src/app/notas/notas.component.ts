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

}
