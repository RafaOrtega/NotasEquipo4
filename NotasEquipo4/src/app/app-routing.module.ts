import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { loginModule } from './login/login.module';

const routes: Routes = [
  { path: "register", component: RegisterComponent},
  { path: "notas", component: NotasComponent},
  {path: 'new-notes', component: NotesComponent},
  { path: "users", component: UsersComponent},
  {path: 'login', component: LoginComponent},
 
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
