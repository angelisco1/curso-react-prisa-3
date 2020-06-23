var Disponible = /** @class */ (function () {
    function Disponible() {
    }
    Disponible.prototype.toggleDisponible = function () {
        this.estaDisponible = !this.estaDisponible;
    };
    return Disponible;
}());
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        // Disponible
        this.estaDisponible = false;
        this.nombre = nombre;
    }
    Persona.prototype.informacion = function () {
        console.log('Soy ' + this.nombre + ' y ' + (this.estaDisponible ? '' : 'no ') + 'estoy disponible para la reunión.');
    };
    return Persona;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Persona, [Disponible]);
var angel = new Persona('Ángel');
angel.toggleDisponible();
console.log(angel.estaDisponible);
angel.toggleDisponible();
console.log(angel.estaDisponible);
