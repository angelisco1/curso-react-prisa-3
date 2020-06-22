var texto: String = 'Hola mundo!'
texto = '2'
console.log(texto)

const NUM: Number = 4;
// NUM = 5;

// let - var

function letVsVar() {
  let num1: Number = 3;
  var num2 = 3;
  // num2 = 'Hola mundo'
  if (true) {
    let num1 = 5;
    var num2 = 5;
    console.log('N1: ', num1)
    console.log('N2: ', num2)
  }
  console.log('N1: ', num1)
  console.log('N2: ', num2)
}

letVsVar()

let n: boolean;
console.log(n)
// n = 4;
n = true;

// Arrays

let colores: Array<String> = ['azul', 'blanco', 'negro', 'amarillo']
let numeros: Array<Number> = [1, 2, 3, 4]

// forEach
// map
// filter
// find
// reduce

let direccion: [String, Number, Number, String] = ['C/ Santa Teresa', 12, 1, 'G'];

interface ISerie {
  nombre: String,
  temporadas: Number,
  episodios: Number,
  episodiosVistos: Number,
  episodiosPorVer: Function
  // episodiosPorVer: (a: Number) => Number
}

const serie: ISerie = {
  nombre: 'Vikings',
  temporadas: 5,
  episodios: 69,
  episodiosVistos: 45,
  episodiosPorVer: function() {
    return this.episodios - this.episodiosVistos;
  }
}

// Union de tipos
type StringYNumber = String | Number;
let strYNums: Array<StringYNumber> =  ['AAA', 88, 334, 'JJJ']

// Template Literals

console.log('La serie ' + serie.nombre + ' \ntiene ' + serie.temporadas + ' temporadas');
console.log(`La serie ${serie.nombre}
tiene ${serie.temporadas} temporadas`);

for (let prop in serie) {
  console.log(`${prop} -> ${serie[prop]}`)
}

for (let val of strYNums) {
  console.log(val);
}

// Desestructuracion, rest op y spread op

// let nombre: String = serie.nombre
// let temporadas: Number = serie.temporadas
// let episodios: Number = serie.episodios
// let episodiosVistos: Number = serie.episodiosVistos

let { episodiosVistos, nombre: titulo, temporadas } = serie;
console.log(titulo, temporadas, episodiosVistos)
console.log(serie)

let [ a, , ne ] = colores
console.log(a, ne)

const seriesConPersonajes = [
  {
    titulo: 'Serie 1',
    personajes: ['P1', 'P2']
  },
  {
    titulo: 'Serie 2',
    personajes: ['P1']
  }
]

// let [, s2] = seriesConPersonajes;
// let [, { personajes }] = seriesConPersonajes;
// let [ p1 ] = personajes;
// console.log(personajes)
let [ p1 ] = seriesConPersonajes[1].personajes;
console.log(p1)

// Rest op
function getNumeroLoteria(numSorteo, ...nums) {
  // console.log('Sorteo: ' + numSorteo)
  // console.log('Números: ' + nums)
  return `Los números para el sorteo ${numSorteo} son: ${nums.sort().join(', ')}`
}
// const getNumeroLoteria = (numSorteo, ...nums) => {
//   // console.log('Sorteo: ' + numSorteo)
//   // console.log('Números: ' + nums)
//   return `Los números para el sorteo ${numSorteo} son: ${nums.sort().join(', ')}`
// }

console.log(getNumeroLoteria(1, 2, 3, 4, 5, 6))
console.log(getNumeroLoteria(1, 2, 3, 4, 5, 6, 7, 8, 9))


// function getColores(c1, c2, c3, c4) {
//   console.log(c1)
//   console.log(c3)
// }

// getColores(...colores);


const coloresAAnyadir = ['rojo', 'verde']
const nuevosColores1 = [colores, coloresAAnyadir]
const nuevosColores2 = [...colores, ...coloresAAnyadir]
console.log(nuevosColores1)
console.log(nuevosColores2)

// const pConEdad = {...serie, nombre: 'Charly', edad: 39}


// function paramsOpcionales (a: Number, b: String = 'aaaaa', c?: Boolean, d: String): void {
//   console.log(b)
// }

// paramsOpcionales(1, '2')
// paramsOpcionales(1, '2', false)
// paramsOpcionales(1)
// paramsOpcionales(1, 'a', null, 'b')


// () => {}
// (a) => {}
// a => {}
// (a, b) => {}
// (a, b) => a + b
// (a, b) => { return a + b }
// (a, b) => { return {a: b} }
// (a, b) => ({a: b})


// function pelicula() {
//   this.añoEstreno = 2000;
//   setTimeout(function() {
//     console.log(this.añoEstreno);
//   }, 1500);
// }

peliculaArrow()


// function pelicula() {
//   let self = this;
//   this.añoEstreno = 2000;
//   setTimeout(function() {
//     console.log(self.añoEstreno);
//   }, 1500);
// }

// function pelicula() {
//   this.añoEstreno = 2000;
//   setTimeout(function() {
//     console.log(this.añoEstreno);
//   }.bind({añoEstreno: 2020}), 1500);
// }

function peliculaArrow() {
  this.añoEstreno = 2000;
  setTimeout(() => {
    console.log(this.añoEstreno);
  }, 1500);
}