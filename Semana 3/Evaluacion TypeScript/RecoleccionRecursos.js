"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recolectarRecursos = exports.Planeta = exports.TipoRecurso = void 0;
// RecoleccionRecursosModule.ts
var TipoRecurso;
(function (TipoRecurso) {
    TipoRecurso[TipoRecurso["Agua"] = 0] = "Agua";
    TipoRecurso[TipoRecurso["Mineral"] = 1] = "Mineral";
    TipoRecurso[TipoRecurso["Vegetaci\u00F3n"] = 2] = "Vegetaci\u00F3n";
})(TipoRecurso || (exports.TipoRecurso = TipoRecurso = {}));
class Planeta {
    constructor(nombre, tipoRecurso, peligro, recursos) {
        this.nombre = nombre;
        this.tipoRecurso = tipoRecurso;
        this.peligro = peligro;
        this.recursos = recursos;
    }
}
exports.Planeta = Planeta;
function recolectarRecursos(planeta) {
    let cantidadRecolectada = { agua: 0, mineral: 0, vegetacion: 0 };
    // Supongamos que recolectamos un tercio de los recursos disponibles en el planeta
    cantidadRecolectada.agua = Math.floor(planeta.recursos.agua / 3);
    cantidadRecolectada.mineral = Math.floor(planeta.recursos.mineral / 3);
    cantidadRecolectada.vegetacion = Math.floor(planeta.recursos.vegetacion / 3);
    console.log(`Recursos recolectados del planeta ${planeta.nombre}:`, cantidadRecolectada);
    return cantidadRecolectada;
}
exports.recolectarRecursos = recolectarRecursos;
