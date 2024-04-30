
export enum TipoRecurso {
    Agua,
    Mineral,
    Vegetación,
  }
  
  interface Recursos {
    agua: number;
    mineral: number;
    vegetacion: number;
  }
  
  export class Planeta {
    constructor(
      public nombre: string,
      public tipoRecurso: TipoRecurso,
      public peligro: string,
      public recursos: Recursos
    ) {}
  }
  
  export function recolectarRecursos(planeta: Planeta): Recursos {
    let cantidadRecolectada: Recursos = { agua: 0, mineral: 0, vegetacion: 0 };
  
    cantidadRecolectada.agua = Math.floor(planeta.recursos.agua / 3);
    cantidadRecolectada.mineral = Math.floor(planeta.recursos.mineral / 3);
    cantidadRecolectada.vegetacion = Math.floor(planeta.recursos.vegetacion / 3);
  
    console.log(`Recursos recolectados del planeta ${planeta.nombre}:`, cantidadRecolectada);
    return cantidadRecolectada;
  }
  