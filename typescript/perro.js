"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Cosas = require("./mascota");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, tipo, sonido) {
        return _super.call(this, nombre, tipo, sonido) || this;
    }
    Perro.prototype.queSoy = function () {
        console.log(this.tipo);
    };
    return Perro;
}(Cosas.Mascota));
var perro = new Perro('Rocky', 'perro', 'guau');
var gato = new Cosas.Mascota('Rocky', 'gato', 'miau');
perro.hazSonido();
perro.sonido;
perro.sonido = 'ssss';
console.log(perro.nombre);
// perro.sonido;
// perro.tipo;
