// Usar condicion if - else if - else (default)
if(True){
    console.log("Hola");
}

var edad = 18;
if(edad === 18){
    console.log("Puedes Votar, sera tu primera votacion");
} else if(edad >18){
    console.log("Puedes Votar de nuevo");
} else {
    console.log("aun no puedes votar");
} 

// Usar if/else en una misma linea

condition ? true:false;


var numero = 1;
var resultado = numero === 1 ? "Si Soy un uno" : "No,No soy un uno";