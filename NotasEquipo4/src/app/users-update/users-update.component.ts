import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Register } from '../register/registers.module';
import Swal from 'sweetalert2'
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
showalertbonita(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu usuario ha sido modificado',
    showConfirmButton: false,
    timer: 3000
  })
}
public editarUsuario(usuario : Register){
  if(usuario.email == localStorage.emailLogged){
    var nuevoNombre =  (<HTMLInputElement>document.getElementById("nombre")).value
    var nuevoApellido = (<HTMLInputElement>document.getElementById("apellidos")).value
    var nuevoTelefono = (<HTMLInputElement>document.getElementById("telefono")).value
    let usersArray = JSON.parse(localStorage.users);
    usersArray.forEach(function(item: Register) {
      if(item.email == localStorage.emailLogged){
        item.nombre = nuevoNombre;
        item.apellidos = nuevoApellido;
        item.telefono = nuevoTelefono;
        localStorage.setItem("users", JSON.stringify(usersArray));
      }
    });
    this.router.navigateByUrl("/users")
      this.showalertbonita()
    /*console.log(usersArray)*/
    //this.router.navigate(["new-notes"],{queryParams: {back_url: this.router.url}})
  }
  else{
    alert("No puedes modificar este usuario")
  }
}


}
