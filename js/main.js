/* CLASE 5y6 */

class Persona {
  constructor(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }
  saludar() {
    alert("Bienvenido a nuestra pagina " + this.nombre);
  }
}
let persona1 = new Persona(
  prompt("Ingrese su nombre completo"),
  prompt("Ingrese su edad"),
  prompt("Ingrese su email")
);
console.log(persona1);

persona1.saludar();

function presupuesto(adelanto, cuotas) {
  return (2000000 - adelanto) / cuotas;
}

for (let index = 0; index < 5; index++) {
  let resultado = presupuesto(
    parseFloat(
      prompt(
        "¿" +
          name +
          " con cuanto dinero en efectivo cuentas para su nuevo vehiculo?"
      )
    )
  );

  let entrada = prompt(
    "Buenisimo " +
      name +
      " ! Por favor seleccione una de las siguientes marcas: \n 1- Fiat \n 2- Peugeot \n 3- Volkswagen" /*\n 4- Toyota \n 5- Mercedes-Benz*/
  );
  if (entrada == 1) {
    alert("Perfecta eleccion! has elegido Fiat");
    let entrada2 = prompt(
      "Seleccione uno de los siguientes modelos: \n 1- Cronos \n 2- Argo \n 3- Fiorino \n 4- Toro \n 5- Volver"
    );
    if (entrada2 == 1) {
      alert("Su eleccion es el Fiat Cronos y su valor es de $1.500.000");
    } else if (entrada2 == 2) {
      alert("Su eleccion es el Fiat Argo y su valor es de $2.200.000");
    } else if (entrada2 == 3) {
      alert("Su eleccion es el Fiat Fiorino y su valor es de $1.800.000");
    } else if (entrada2 == 4) {
      alert("Su eleccion es el Fiat Toro y su valor es de $2.700.000");
    } else if (entrada2 == 5) {
      alert("Tendriamos que volver al menu anterior(?");
    }
  } else if (entrada == 2) {
    alert("Perfecta eleccion! has elegido Peugeot");
    let entrada2 = prompt(
      "Seleccione uno de los siguientes modelos: \n 1- Partnet \n 2- Nuevo 208 \n 3- 308 \n 4- Volver"
    );
    if (entrada2 == 1) {
      alert("Su eleccion es el Peugeot Partnet y su valor es de $2.150.000");
    } else if (entrada2 == 2) {
      alert("Su eleccion es el Peugeot Nuevo 208 y su valor es de $2.700.000");
    } else if (entrada2 == 3) {
      alert("Su eleccion es el Peugeot 308 y su valor es de $2.300.000");
    } else if (entrada2 == 4) {
      alert("Tendriamos que volver al menu anterior(?");
    }
  } else if (entrada == 3) {
    alert("Perfecta eleccion! has elegido Volkswagen");
    let entrada2 = prompt(
      "Seleccione uno de los siguientes modelos: \n 1- Polo \n 2- Gol \n 3- Amarok \n 4- Volver"
    );
    if (entrada2 == 1) {
      alert("Su eleccion es el Volkswagen Polo y su valor es de $1.900.000");
    } else if (entrada2 == 2) {
      alert("Su eleccion es el Volkswagen Gol y su valor es de $2.400.000");
    } else if (entrada2 == 3) {
      alert("Su eleccion es el Volkswagen Amarok y su valor es de $4.150.000");
    } else if (entrada2 == 4) {
      alert("Tendriamos que volver al menu anterior(?");
    }
  } /* else if (entrada == 4) {
    alert("Perfecta eleccion! has elegido Toyota");
    let entrada2 = prompt(
      "Seleccione uno de los siguientes modelos: \n 1- Cronos \n 2- Argo \n 3- Fiorino \n 4- Toro \n Volver"
    );
    if (entrada2 == 1) {
      alert("Su eleccion es el Fiat Cronos y su valor es de $1.500.000");
    } else if (entrada2 == 2) {
      alert("Su eleccion es el Fiat Argo y su valor es de $2.200.000");
    } else if (entrada2 == 3) {
      alert("Su eleccion es el Fiat Fiorino y su valor es de $1.800.000");
    } else if (entrada2 == 4) {
      alert("Su eleccion es el Fiat Toro y su valor es de $2.700.000");
    } else if (entrada2 == 5) {
      alert("Tendriamos que volver al menu anterior(?");
    }
  } else if (entrada == 5) {
    alert("Perfecta eleccion! has elegido Mercedes-Benz");
    let entrada2 = prompt(
      "Seleccione uno de los siguientes modelos: \n 1- Cronos \n 2- Argo \n 3- Fiorino \n 4- Toro \n Volver"
    );
    if (entrada2 == 1) {
      alert("Su eleccion es el Fiat Cronos y su valor es de $1.500.000");
    } else if (entrada2 == 2) {
      alert("Su eleccion es el Fiat Argo y su valor es de $2.200.000");
    } else if (entrada2 == 3) {
      alert("Su eleccion es el Fiat Fiorino y su valor es de $1.800.000");
    } else if (entrada2 == 4) {
      alert("Su eleccion es el Fiat Toro y su valor es de $2.700.000");
    } else if (entrada2 == 5) {
      alert("Tendriamos que volver al menu anterior(?");
    }
  } */

  let cuotas = parseFloat(
    prompt("¿ En cuantas cuotas desea realizar la compra del vehiculo ?")
  );

  alert("El valor de las cuotas es de " + resultado);
  console.log("El valor de las cuotas es de " + resultado);
}
