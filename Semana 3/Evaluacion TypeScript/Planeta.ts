import { TipoRecurso } from './TipoRecurso';

export class Planeta {
    nombre: string;
    tipoRecurso: TipoRecurso;
    descripcion: string;
    recursos: { [key: string]: number };

    constructor(nombre: string, tipoRecurso: TipoRecurso, descripcion: string, recursos: { [key: string]: number }) {
        this.nombre = nombre;
        this.tipoRecurso = tipoRecurso;
        this.descripcion = descripcion;
        this.recursos = recursos;
    }
}