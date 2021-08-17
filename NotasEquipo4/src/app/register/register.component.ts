import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from './registers.module';
import { UserService } from '../services/user.service';
import { NotesComponent } from '../notes/notes.component';
import { Note } from '../notes/notes.module';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register={
    nombre: "",
    apellidos:"",
    telefono: "",
    email: "", 
    password: "",
    notes : []=[]
  }
  
  userForm: FormGroup;
  message: any = ""

  constructor(private userService: UserService) {
    
    this.userForm = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos:new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]), 
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
    
  }

  ngOnInit(): void {
  }

  async onSubmit({value,valid}:{value: Register, valid:boolean}){//fu: NgForm){ //onSubmit viene del form de Register
    //this.register= fu.value;
    console.log(value, valid)
    if(valid){
      try{
        this.message= await this.userService.registertUser(value)
        console.log(typeof this.message,this.message)
      }catch(err){
        console.log(err)
      }
      this.userForm.reset()
    }else{
      this.message = "Tienes campos invalidos"
      console.log(this.userForm)
    }

  }

}
