export class Evento {
  constructor(
      public descripcion: string,
      public afectaSalud: number,
      public afectaCapacidadCarga: number
  ) {}
}

export function generarEvento(): Evento {
  return new Evento('Evento aleatorio', -10, -5);
}

export function manejarEvento(evento: Evento): void {
  console.log(`Manejando evento: ${evento.descripcion}`);
}