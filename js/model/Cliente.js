"use strict";

import { Persona } from "../model/Persona.js";

export class Cliente extends Persona {
    constructor() {
        super();
        this.credito = 0;
    }

    set setCredito(credito) {
        this.credito = credito;
    }

    get getCredito() {
        return this.credito;
    }
    datosCompletos() {
        return `Edad: ${super.getEdad}, nombre: ${super.getNombre}, telefono: ${super.getTelefono}, credito: ${this.credito}`;
    }
}