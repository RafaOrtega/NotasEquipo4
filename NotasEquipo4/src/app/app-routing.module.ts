import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "register", component: RegisterComponent},
  { path: "notas", component: NotasComponent},
  {path: 'new-notes', component: NotesComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
