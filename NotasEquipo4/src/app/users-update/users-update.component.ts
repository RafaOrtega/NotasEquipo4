import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


import { Register } from '../register/registers.module';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Register[]=[];
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }



async getUser(){
  try{
    this.user = await this.userService.obtenerUserByEmail()
  }catch(err){

  }
}


}
