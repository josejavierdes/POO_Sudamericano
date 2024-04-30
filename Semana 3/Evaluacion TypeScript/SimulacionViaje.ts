import { NaveEspacial } from './NaveEspacial';
import { Evento, generarEvento } from './ManejoEventos';

export function simularViaje(nave: NaveEspacial): void {
  const tiempoPasado = 1; 

  const evento: Evento = generarEvento();

  if (typeof evento.afectaSalud === 'number') {
    nave.salud += evento.afectaSalud;
  }

  console.log(`Ha pasado ${tiempoPasado} unidad(es) de tiempo durante el viaje.`);
  console.log(`Evento aleatorio durante el viaje: ${evento.descripcion}`);
  console.log(`Estado actual de la nave: Salud: ${nave.salud}, Capacidad de Carga: ${nave.capacidadCarga}, Velocidad: ${nave.velocidad}`);
}