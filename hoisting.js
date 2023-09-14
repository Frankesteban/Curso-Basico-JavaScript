// Como se llama una variable que no se ha declarado, el hoisting marca coimo undefined
console.log(miNombre);
var miNombre = "Frank";

//ejemplo para correr en consola y entender como lo define
var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
miNombre="Frank";

// Funciones

hey();

function hey() {
    console.log("hola " + miNombre);
}

var miNombre = "Francisco";

//Lo ideal es que se declaren la funcines al inicio