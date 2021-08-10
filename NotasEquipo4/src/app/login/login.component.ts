import { Component, OnInit } from '@angular/core';
import { loginModule } from './login.module';
import { NgForm } from '@angular/forms';


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
  constructor() { }
  

  ngOnInit(): void {
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
  }
}
 

