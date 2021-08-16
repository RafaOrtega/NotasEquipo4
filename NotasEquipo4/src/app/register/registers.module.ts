
import { Note } from '../notes/notes.module'

export interface Register{
    nombre: string,
    apellidos: string,
    telefono: string,
    email: string, 
    password: string,
    /*notes : [{
        tituloNota: string,
        descripcion: string,
        fechaInicio: string,
        fechaFin: string,
        tipo: string
    }]*/
    notes: Note[];
}