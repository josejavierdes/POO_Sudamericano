"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.explorar = void 0;
let posicionNave = { x: 0, y: 0 };
function explorar(direccion) {
    switch (direccion) {
        case 'norte':
            posicionNave.y++;
            break;
        case 'sur':
            posicionNave.y--;
            break;
        case 'este':
            posicionNave.x++;
            break;
        case 'oeste':
            posicionNave.x--;
            break;
        default:
            console.log('Dirección no válida.');
            return;
    }
    console.log(`La nave se ha movido a la posición (${posicionNave.x}, ${posicionNave.y}).`);
}
exports.explorar = explorar;
