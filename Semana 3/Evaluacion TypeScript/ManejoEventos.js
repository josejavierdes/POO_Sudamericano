"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manejarEvento = exports.generarEvento = exports.Evento = void 0;
class Evento {
    constructor(descripcion, afectaSalud, afectaCapacidadCarga) {
        this.descripcion = descripcion;
        this.afectaSalud = afectaSalud;
        this.afectaCapacidadCarga = afectaCapacidadCarga;
    }
}
exports.Evento = Evento;
function generarEvento() {
    // Lógica para generar eventos aleatorios
    return new Evento('Evento aleatorio', -10, -5);
}
exports.generarEvento = generarEvento;
function manejarEvento(evento) {
    console.log(`Manejando evento: ${evento.descripcion}`);
}
exports.manejarEvento = manejarEvento;
