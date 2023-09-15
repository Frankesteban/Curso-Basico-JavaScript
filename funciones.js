// conjunto de sentencias que se realizan para un flujo

// Declarativas

function miFuncion() {
    return 3;
}
miFuncion();

// Expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


// Se declara la funcion con los parametros que espera recibir
function sumar(a,b) {       
    var resultado = a + b;  // se declara una variable que incluye la funcion de suma

    return resultado;      // llamamos por medio de return para que muestre en pantalla el resultado de la variable.
}


// Para llamar la funcion se llama por nombre y declarar los valores que iran en los parametros
sumar(1,2)