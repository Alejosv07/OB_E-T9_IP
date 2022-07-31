"use strict";
import { Cliente } from "../js/model/Cliente.js";

((c) => {
    //Funcion auto ejecutable

    /*     
        Crea una clase Persona con las siguientes variables:
        
        La edad
        
        El nombre
        
        El teléfono
        
        Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
        
        Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
        
        Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador. 
    */

    const cliente = new Cliente();
    cliente.setEdad = 18;
    cliente.setNombre = "Alejandro";
    cliente.setTelefono = "+50386794521";
    cliente.setCredito = 100;


    c.log(cliente.datosCompletos());
})(console);