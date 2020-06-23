class Mascota {
  // public nombre: string;
  // private sonido: string;
  // protected tipo: string;

  // constructor(nombre: string, tipo: string, sonido: string) {
  //   this.nombre = nombre
  //   this.tipo = tipo
  //   this.sonido = sonido
  // }

  constructor(public nombre: string, protected tipo: string, private _sonido: string) {}

  hazSonido(): void {
    console.log(this._sonido)
  }

  get sonido(): string {
    return this._sonido
  }

  set sonido(val: string) {
    this._sonido = val
  }
}

const NUM = 3;

export { NUM, Mascota };
export default Mascota;