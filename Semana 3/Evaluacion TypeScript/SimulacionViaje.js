"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simularViaje = void 0;
const ManejoEventos_1 = require("./ManejoEventos");
function simularViaje(nave) {
    // Simulamos el paso del tiempo
    const tiempoPasado = 1; // Se puede ajustar según el tiempo simulado en cada iteración
    // Simulamos eventos aleatorios durante el viaje
    const evento = (0, ManejoEventos_1.generarEvento)();
    // Verificamos que el efecto de salud del evento sea numérico antes de actualizar la salud de la nave
    if (typeof evento.afectaSalud === 'number') {
        // Actualizamos el estado de la nave en función del evento aleatorio
        nave.salud += evento.afectaSalud;
    }
    // Imprimimos información sobre el evento y el estado de la nave
    console.log(`Ha pasado ${tiempoPasado} unidad(es) de tiempo durante el viaje.`);
    console.log(`Evento aleatorio durante el viaje: ${evento.descripcion}`);
    console.log(`Estado actual de la nave: Salud: ${nave.salud}, Capacidad de Carga: ${nave.capacidadCarga}, Velocidad: ${nave.velocidad}`);
}
exports.simularViaje = simularViaje;
