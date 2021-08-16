import { Component, OnInit } from '@angular/core';
import { Note } from '../notes/notes.module';
import { Register} from '../register/registers.module';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 // @Input() users: User[] = [];
usuarios: Register[] =[];
notes: Note[]=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getNotee();
  }

  async getUsers(){
    try{
      this.usuarios = await this.userService.getUsers()
    }catch(err){

    }
   
  }
  async getNotee(){
    try{
      this.notes = await this.userService.obtenerNotes();
  
    }catch(err){
  
    }
  }

  public eliminarUsuario(usuario: Register){
    let userpos= this.usuarios.indexOf(usuario);
    const arregloUsuarios = JSON.parse(localStorage.users)
    let notasArray = JSON.parse(localStorage.notes);
    if (confirm("Seguro de eliminar al usuario? ")) {
      if (arregloUsuarios.find((e: { email: string; }) => e.email == usuario.email)) {
        let arregloNotas: [] = notasArray.filter((e: { emailUser: string; }) => e.emailUser == usuario.email)
        arregloNotas.forEach(element => {
          let notapos = notasArray.indexOf(element);
          notasArray.splice(notapos, 1)
          localStorage.setItem("notes", JSON.stringify(notasArray));
        });
        arregloUsuarios.splice(userpos, 1)
        localStorage.setItem("users", JSON.stringify(arregloUsuarios));
        window.location.reload();
      } else {
        console.log("No existe el email")
      }
    }
  }


   //METODO PARA EDITAR EL USUARIO DE MANERA ESTATICA
  public editarUsuario(usuarios : Register){
    if(usuarios.email == localStorage.emailLogged){
      let usersArray = JSON.parse(localStorage.users);
      var nuevoTelefono = "1234567890"
      usersArray.forEach(function(item:any) {
        if(item.email == localStorage.emailLogged)
          item.telefono = nuevoTelefono;
          localStorage.setItem("users", JSON.stringify(usersArray));
      });
      console.log(usersArray)
      //this.router.navigate(["new-notes"],{queryParams: {back_url: this.router.url}})
    }
    else{
      alert("No puedes modificar este usuario")
    }
  }



}
