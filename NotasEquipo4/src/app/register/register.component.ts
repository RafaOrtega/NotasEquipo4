import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from './registers.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //registers: Register[]=[];

  register: Register={
    nombre: "",
    apellidos:"",
    telefono: "",
    email: "", 
    password: ""

  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(fu: NgForm){
    this.register= fu.value;
    console.log(this.register)
    /*const {nombre,apellidos,telefono,email,password} = fu.value

    this.register={
      nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    email: email, 
    password: password
    }
    this.registers.push(this.register);
    console.log(this.registers)*/
  }

}
