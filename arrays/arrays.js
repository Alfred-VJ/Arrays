//Para las primeras 5 preguntas tendrás que crear un array con las especificaciones que se te pida para cada caso.

//Crea un array de 5 elementos:
//El elemento del indice 4 tendra el string "Thom", el 2 "Gonza" y los otros tres tendrán el mismo string: "Hello"
let arrayString = ["Hello", "Hello", "Gonza", "Hello", "Thom"];

//Crea un array de 5 elementos:
//El elemento del indice 1 tendra el numero 8, el indice 3 = 34, en los otros indices puedes colocar el numero que gustes
let arrayNumero = [3, 8, 2, 34, 4];

//Crea un array de 3 elementos:
//El elemento del indice 2 tendra el booleano true, el indice 0 = true y el indice 1 = false
let arrayBoleanos = [true, false, true];

//Crea un array de 5 elementos:
//El elemento del indice 0 tendra el arrayNumero, el indice 1 = arrayBoleanos, el indice 2 = arrayString, 
//el indice 3 sera igual a un array que tenga 2 elementos el elemento del indice 0 sera el largo del arrayNumero y el indice 1 = "hola"
// el indice 4 sera igual a un array que contenga un elemento que a su vez sera un array que tendra el valor del indice 2 de arrayNumero
//en este ultimo elemento intenta no poner el valor directamente(si no lo puedes hacer así resuelvelo como gustes para pasar el test)
let arrayDeArray = [arrayNumero, arrayBoleanos, arrayString, [arrayNumero.length, "hola"], [[arrayNumero[2]]]];


//Crea un array de 3 elementos:
//El elemento del indice 1 tendra el numero 141, el indice 0 = "34" y el indice 2 tendra un false
let arrayCombinado = ["34", 141, false];

//Para los siguentes ejercicios deveras colocar tu codigo dentro de las funciones y retornar tu respuesta 
//con la palabra return

function metodoMap(array) {
    //Recibiras un array que contiene numeros,  deberas sumarle 2 a cada elemento
    //devuelve el array modificado recuerda que tienes que utilizar el "return"
    //Tu codigo:
    return array.map(e => e + 2);
}

function metodoFilter(array) {
    //Recibiras un array que contendra un lista de productos tienes que filtrar solo los productos y devolcer solo los 
    //"banana", "orange", "lemon" retorna el nuevo array
    //Tu codigo:
    return array.filter(e => e === "banana" || e === "orange" || e === "lemon");
}


module.exports = {
    arrayString,
    arrayNumero,
    arrayBoleanos,
    arrayDeArray,
    arrayCombinado,
    metodoMap,
    metodoFilter
}











