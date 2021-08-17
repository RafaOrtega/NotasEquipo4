import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


import { NotasComponent } from '../notas/notas.component';


@Component({
  selector: 'app-notas-update',
  templateUrl: './notas-update.component.html',
  styleUrls: ['./notas-update.component.css']
})
export class NotasUpdateComponent implements OnInit {
  nota: NotasComponent[]=[];
  constructor(private router: Router,private userServices: UserService) { }

  ngOnInit(): void {
  }

  async getNotee(){
    try{
      this.nota  = await this.userServices.g
  
    }catch(err){
  
    }
  }

}
