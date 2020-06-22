// const equipos = ['Valencia', 'Real Madrid', 'Barcelona', 'At Bilbao']
// Valencia vs Barcelona
// At Bilbao vs Real Madrid
var equipos = ['Valencia', 'Real Madrid', 'Barcelona', 'At Bilbao', 'Sevilla'];
// Real Madrid vs Barcelona
// At Bilbao vs Sevilla
// Valencia pasa directo de ronda
// Intentar usar Desestructuracion y rest op
function shuffle(equipos) {
    var equiposAleatorios = [];
    for (var i = equipos.length - 1; i >= 0; i--) {
        var pos = Math.floor(Math.random() * equipos.length);
        var equipo = equipos.splice(pos, 1)[0];
        equiposAleatorios.push(equipo);
    }
    return equiposAleatorios;
}
function getEnfrentamientos(equipos) {
    if (equipos.length > 1) {
        var equipo1 = equipos[0], equipo2 = equipos[1], resto = equipos.slice(2);
        console.log(equipo1 + " vs " + equipo2);
        getEnfrentamientos(resto);
    }
    else {
        if (equipos.length === 1) {
            var equipo = equipos[0];
            console.log(equipo + ' pasa de ronda');
        }
        console.log('No hay mas equipos');
    }
}
var equiposAleatorios = shuffle(equipos);
console.log(equiposAleatorios);
getEnfrentamientos(equiposAleatorios);
