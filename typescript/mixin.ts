class Disponible {
  estaDisponible: boolean;
  toggleDisponible() {
    this.estaDisponible = !this.estaDisponible;
  }
}

class Persona implements Disponible {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  informacion(): void {
    console.log('Soy ' + this.nombre + ' y ' + (this.estaDisponible ? '' : 'no ') + 'estoy disponible para la reunión.');
  }

  // Disponible
  estaDisponible: boolean = false;
  toggleDisponible: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {

  baseCtors.forEach(baseCtor => {

    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {

      derivedCtor.prototype[name] = baseCtor.prototype[name];

    });
  });
}

applyMixins(Persona, [Disponible]);

let angel = new Persona('Ángel')
angel.toggleDisponible()
console.log(angel.estaDisponible)
angel.toggleDisponible()
console.log(angel.estaDisponible)