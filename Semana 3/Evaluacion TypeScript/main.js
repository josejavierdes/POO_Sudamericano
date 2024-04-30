"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navegacion_1 = require("./Navegacion");
const RecoleccionRecursos_1 = require("./RecoleccionRecursos");
const ManejoEventos_1 = require("./ManejoEventos");
const InterfazUsuario_1 = require("./InterfazUsuario");
function iniciarSimulador() {
    return __awaiter(this, void 0, void 0, function* () {
        let saludNave = 100;
        let capacidadCargaNave = 50;
        let velocidadNave = 10;
        const planetaInicial = new RecoleccionRecursos_1.Planeta('Planeta Inicial', RecoleccionRecursos_1.TipoRecurso.Agua, 'Sin peligros', { agua: 1000, mineral: 500, vegetacion: 300 });
        while (saludNave > 0) {
            console.log('-----------------------------------------------------');
            console.log('Bienvenido al Simulador de Exploración Espacial');
            console.log(`Estado actual de la nave: Salud: ${saludNave}, Capacidad de Carga: ${capacidadCargaNave}, Velocidad: ${velocidadNave}`);
            console.log('¿Qué acción deseas realizar?');
            console.log('1. Explorar un nuevo sector');
            console.log('2. Recolectar recursos del planeta actual');
            console.log('3. Realizar mantenimiento en la nave');
            console.log('4. Terminar la exploración');
            const opcion = yield (0, InterfazUsuario_1.capturarEntradaUsuario)();
            switch (opcion) {
                case '1':
                    const direccion = yield capturarDireccion();
                    (0, Navegacion_1.explorar)(direccion);
                    break;
                case '2':
                    const recursosRecolectados = (0, RecoleccionRecursos_1.recolectarRecursos)(planetaInicial);
                    console.log('Recursos recolectados:', recursosRecolectados);
                    break;
                case '3':
                    const evento = (0, ManejoEventos_1.generarEvento)();
                    (0, ManejoEventos_1.manejarEvento)(evento);
                    console.log(`Evento aleatorio durante el viaje: ${evento.descripcion}`); 
                    break;
                case '4':
                    console.log('Terminando la exploración...');
                    return;
                default:
                    console.log('Opción no válida. Por favor, selecciona una opción válida.');
                    break;
            }
        }
        console.log('La nave ha sido destruida. Fin del juego.');
    });
}
function capturarDireccion() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Selecciona la dirección de exploración: (norte, sur, este, oeste)');
        return yield (0, InterfazUsuario_1.capturarEntradaUsuario)();
    });
}
iniciarSimulador();
