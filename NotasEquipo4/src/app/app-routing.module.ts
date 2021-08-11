import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: "register", component: RegisterComponent},
  { path: "users", component: UsersComponent, canActivate: [AuthGuardService]},
  { path: 'new-notes', component: NotesComponent},
  { path: "notas", component: NotasComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
