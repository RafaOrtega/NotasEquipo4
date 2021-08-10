import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'new-notes', component: NotesComponent},
  { path: "register", component: RegisterComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
