import { Component, OnInit } from '@angular/core';
import { Register } from '../register/registers.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users: Register[]=[];

  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers(){
    try{
      this.users = await this.userServices.getUsers()
    }catch(err){

    }

  }
  NotesUser(): void{
    alert("función");
  }

  editUser(): void{
    
  }

  deleteUser():void{
    alert("Cuidado")
  }

}
