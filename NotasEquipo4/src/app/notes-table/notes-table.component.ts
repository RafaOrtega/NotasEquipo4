import { Component, OnInit, Input } from '@angular/core';
import {Note} from '../notes/notes.module'

@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit {

  @Input() notes: Note[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
