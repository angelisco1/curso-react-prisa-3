// const equipos = ['Valencia', 'Real Madrid', 'Barcelona', 'At Bilbao']
// Valencia vs Barcelona
// At Bilbao vs Real Madrid

const equipos = ['Valencia', 'Real Madrid', 'Barcelona', 'At Bilbao', 'Sevilla']
// Real Madrid vs Barcelona
// At Bilbao vs Sevilla
// Valencia pasa directo de ronda

// Intentar usar Desestructuracion y rest op

function shuffle(equipos: Array<String>): Array<String> {
  const equiposAleatorios: Array<String> = []
  for (let i = equipos.length - 1; i >= 0; i--) {
    const pos: number = Math.floor(Math.random() * equipos.length);
    const [ equipo ] = equipos.splice(pos, 1)
    equiposAleatorios.push(equipo)
  }
  return equiposAleatorios;
}

function getEnfrentamientos(equipos: Array<String>): void {
  if (equipos.length > 1) {
    const [ equipo1, equipo2, ...resto ] = equipos;
    console.log(`${equipo1} vs ${equipo2}`)
    getEnfrentamientos(resto)
  } else {
    if (equipos.length === 1) {
      const [ equipo ] = equipos;
      console.log(equipo + ' pasa de ronda')
    }
    console.log('No hay mas equipos')
  }
}

const equiposAleatorios: Array<String> = shuffle(equipos)
console.log(equiposAleatorios)
getEnfrentamientos(equiposAleatorios)