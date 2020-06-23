"use strict";
exports.__esModule = true;
var Mascota = /** @class */ (function () {
    // public nombre: string;
    // private sonido: string;
    // protected tipo: string;
    // constructor(nombre: string, tipo: string, sonido: string) {
    //   this.nombre = nombre
    //   this.tipo = tipo
    //   this.sonido = sonido
    // }
    function Mascota(nombre, tipo, _sonido) {
        this.nombre = nombre;
        this.tipo = tipo;
        this._sonido = _sonido;
    }
    Mascota.prototype.hazSonido = function () {
        console.log(this._sonido);
    };
    Object.defineProperty(Mascota.prototype, "sonido", {
        get: function () {
            return this._sonido;
        },
        set: function (val) {
            this._sonido = val;
        },
        enumerable: true,
        configurable: true
    });
    return Mascota;
}());
exports.Mascota = Mascota;
var NUM = 3;
exports.NUM = NUM;
exports["default"] = Mascota;
