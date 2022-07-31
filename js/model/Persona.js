"use strict";

export class Persona {
    constructor() {
        this.edad = 0;
        this.nombre = "";
        this.telefono = "";
    }

    set setEdad(edad) {
        this.edad = edad;
    }

    get getEdad() {
        return this.edad;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getNombre() {
        return this.nombre;
    }

    set setTelefono(telefono) {
        this.telefono = telefono;
    }

    get getTelefono() {
        return this.telefono;
    }

    datosCompletos() {
        return `Edad: ${this.getEdad}, nombre: ${this.getNombre}, telefono: ${this.getTelefono}`;
    }
}