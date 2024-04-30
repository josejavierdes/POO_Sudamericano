import { explorar, Direccion } from './Navegacion';
import { Planeta, TipoRecurso, recolectarRecursos } from './RecoleccionRecursos';
import { generarEvento, manejarEvento } from './ManejoEventos';
import { capturarEntradaUsuario } from './InterfazUsuario';
import { simularViaje } from './SimulacionViaje';

async function iniciarSimulador(): Promise<void> {
    let saludNave = 100;
    let capacidadCargaNave = 50;
    let velocidadNave = 10;
    let state = true;
    const planetaInicial = new Planeta('Planeta Inicial', TipoRecurso.Agua, 'Sin peligros', { agua: 1000, mineral: 500, vegetacion: 300 });

    while (saludNave > 0 || state) {
        console.log('-----------------------------------------------------');
        console.log('Bienvenido al Simulador de Exploración Espacial');
        console.log(`Estado actual de la nave: Salud: ${saludNave}, Capacidad de Carga: ${capacidadCargaNave}, Velocidad: ${velocidadNave}`);
        console.log('¿Qué acción deseas realizar?');
        console.log('1. Explorar un nuevo sector');
        console.log('2. Recolectar recursos del planeta actual');
        console.log('3. Realizar mantenimiento en la nave');
        console.log('4. Terminar la exploración');

        const opcion = await capturarEntradaUsuario();

        switch (opcion) {
            case '1':
                const direccion = await capturarDireccion();
                explorar(direccion);
                break;
            case '2':
                const recursosRecolectados = recolectarRecursos(planetaInicial);
                console.log('Recursos recolectados:', recursosRecolectados);
                break;
            case '3':
                console.log(`Se ha realizado un mantenimiento a la nave!`); 
                break;
            case '4':
                console.log('Terminando la exploración...');
                state = false;
                break
            default:
                console.log('Opción no válida. Por favor, selecciona una opción válida.');
                break;
        }
    }

    console.log('La nave ha sido destruida. Fin del juego.');
}

async function capturarDireccion(): Promise<Direccion> {
    console.log('Selecciona la dirección de exploración: (norte, sur, este, oeste)');
    return await capturarEntradaUsuario() as Direccion;
}

iniciarSimulador();
