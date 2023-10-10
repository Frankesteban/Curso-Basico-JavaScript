var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){// Inicia en la posicion "0" del arreglo y mientras el numero no sea igual a la longitud de valores que tiene el arreglo se continuaran listado.
    saludarEstudiantes(estudiantes[i]);
}


//En esta forma se crea una variable del arreglo estudiantes y se van listando uno por uno en el cliclo
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}



// Ciclo While
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
    function saludarEstudiantes(estudiante){
        console.log(`Hola, ${estudiante}`);
    }
    while(estudiantes.length>0){
        var estudiante = estudiantes.shift();//.shift sirve para sacar el primer elemento del arreglo por eso se repite el ciclo hasta que el numero de elementos en el arreglo sea igual a cero y no mayor.
        saludarEstudiantes(estudiante);
    }