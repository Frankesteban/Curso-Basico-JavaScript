var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var resultado = function(user,cpu){
    {
        if(user === piedra && cpu === tijera){
        console.log("el usuario GANO con "+ piedra)
    }else if(user === papel && cpu === piedra){
        console.log( "el usuario GANO con " + papel)
    }else if(user === tijera && cpu === papel){
        console.log("el usuario GANO con " + tijera)
    }
    else if(user === cpu){
        console.log("Empate")}
    else{
        console.log("La CPU Gano!!")
    }
}
};

resultado(piedra,tijera);//el usuario GANO con Piedra

// Utilizando el mismo juego con ciclo switch
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function resultado(user,cpu){
    switch(true){
    case user === piedra && cpu === tijera:
        console.log("el usuario GANO")
            break;
    
    case user === papel && cpu === piedra:
        console.log("el usuario GANO")
            break;
    
    case user === tijera && cpu === papel:
                console.log("el usuario GANO")
                    break;

    case user === cpu:
        console.log("empate")
            break;
            default:
                console.log("La CPU GANO")
        }
};

resultado(piedra,tijera);//el usuario GANO




//utilizando Switch con return, se declara la variable a comprobar y en casos las palabras que se quieran definir para cada mensaje
function solution(article){
    switch(article){
    case "computadora":
    return"Con mi computadora puedo programar usando JavaScript";
            break;
    
    case "celular":
        return"En mi celular puedo aprender usando la app de Platzi"
            break;
    
    case "cable":
                return"¡Hay un cable en mi bota!"
                    break;
            default:
                return"Artículo no encontrado"
        }
};

resultado(piedra,tijera);//el usuario GANO