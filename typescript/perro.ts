import * as Cosas from './mascota'

class Perro extends Cosas.Mascota {
  constructor(nombre: string, tipo: string, sonido: string) {
    super(nombre, tipo, sonido)
  }

  queSoy(): void {
    console.log(this.tipo);
  }
}

let perro = new Perro('Rocky', 'perro', 'guau');
let gato = new Cosas.Mascota('Rocky', 'gato', 'miau');

perro.hazSonido()
perro.sonido;
perro.sonido = 'ssss'
console.log(perro.nombre);
// perro.sonido;
// perro.tipo;
