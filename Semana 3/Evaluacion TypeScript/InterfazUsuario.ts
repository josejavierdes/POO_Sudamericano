
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function capturarEntradaUsuario(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('> ', (answer) => {
      resolve(answer.trim());
    });
  });
}
