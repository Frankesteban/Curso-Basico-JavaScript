//Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro,
//guarda los datos en forma de lista. .lenght devuelve la longitud del array.
 //.push() agrega elementos al final de array. 
 //.pop() elimina un elemento del array. 
 //.unshift() agrega un elemento al array, pero lo agrega en primer lugar. **.
 //shift() **elimina el elemento que está en el inicio del array. **.
 //indexOf ** devuelve la posición de un elemento del array.//
 
 
 var frutas = ["Manzana", "platano", "cereza", "fresa"];

 console.log(frutas.length) //Muestra al longitud del arreglo
 console.log(frutas[2]); //Trae el valor en la posicion 2 del arreglo en este caso "Cereza"

 //para agrgar mas frutas al final del arreglo se usa
 var masFrutas = frutas.push("uvas");


 // Elimina algun elemento del arreglo
 var masFrutas = frutas.pop("uvas");