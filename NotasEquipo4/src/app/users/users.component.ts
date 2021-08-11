import { Component, OnInit } from '@angular/core';
import { Register } from '../register/registers.module';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 // @Input() users: User[] = [];
usuarios: Register[] =[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    try{
      this.usuarios = await this.userService.getUsers()
    }catch(err){
      
    }
   
  }
}
