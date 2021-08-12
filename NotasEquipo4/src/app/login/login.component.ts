import { Component, OnInit } from '@angular/core';
import { loginModule } from './login.module';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logins: loginModule []=[];
  login: loginModule={
    email: "",
    password:""

  }
  constructor(private userServices: UserService) { }
  

  ngOnInit(): void {
    //this.loginUser();
  }

  onSubmit(fu: NgForm){
    this.login= fu.value;
    console.log(this.login)
    const {email,password} = fu.value
    this.login={
    email: email, 
    password: password
    }
    this.logins.push(this.login);
    console.log(this.logins)
    this.loginUser(email,password);
  }

  async loginUser(email:any,password:any){
    try{
      let valor = await this.userServices.logIn(email,password);
      console.log(valor);
    }catch(err){
      console.log(err);
    }
  }
}
 

