import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';
import { AppRoutingModule } from './app-routing.module';
import {  UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';
import { NotesTableComponent } from './notes-table/notes-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { EliminarNotaComponent } from './eliminar-nota/eliminar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    NotesComponent,
    RegisterComponent,
    UsersComponent,
    LoginComponent,
    NotesComponent,
    NotesTableComponent,
    DashboardComponent,
    EditarNotaComponent,
    EliminarNotaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
