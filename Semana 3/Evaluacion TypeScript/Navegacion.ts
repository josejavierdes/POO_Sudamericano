export enum Direccion {
  Norte = "norte",
  Sur = "sur",
  Este = "este",
  Oeste = "oeste"
}

export function explorar(direccion: Direccion): void {
  console.log(`Explorando en dirección ${direccion}`);
}