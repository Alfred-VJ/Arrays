const {
    arrayString,
    arrayNumero,
    arrayBoleanos,
    arrayDeArray,
    arrayCombinado,
    metodoFilter,
    metodoMap
} = require('./arrays.js');



it("(arrayString) El elemento del indice 4 debe de ser Thom", () => {
    expect(arrayString[4]).toBe("Thom");
});

it("(arrayString) El elemento del indice 2 debe de ser Gonza", () => {
    expect(arrayString[2]).toBe("Gonza");
});

it("(arrayString) El elemento del indice 0 debe de ser Hello", () => {
    expect(arrayString[0]).toBe("Hello");
});
it("(arrayString) El elemento del indice 1 debe de ser Hello", () => {
    expect(arrayString[1]).toBe("Hello");
});
it("(arrayString) El elemento del indice 3 debe de ser Hello", () => {
    expect(arrayString[3]).toBe("Hello");
});
//------------------------------------------//
//------------------------------------------//
//------------------------------------------//
it("(arrayNumero) El elemento del indice 0 debe de ser el que tu eligas", () => {
    expect(arrayNumero[0]).toBe(arrayNumero[0]);
});

it("(arrayNumero) El elemento del indice 1 debe de ser 8", () => {
    expect(arrayNumero[1]).toBe(8);
});

it("(arrayNumero) El elemento del indice 2 debe de ser el que tu eligas", () => {
    expect(arrayNumero[2]).toBe(arrayNumero[2]);
});
it("(arrayNumero) El elemento del indice 3 debe de ser 34", () => {
    expect(arrayNumero[3]).toBe(34);
});
it("(arrayNumero) El elemento del indice 4 debe de ser el que tu eligas", () => {
    expect(arrayNumero[4]).toBe(arrayNumero[4]);
});
//------------------------------------------//
//------------------------------------------//
//------------------------------------------//
it("(arrayBoleanos) El elemento del indice 0 debe de ser true ", () => {
    expect(arrayBoleanos[0]).toBe(true);
});

it("(arrayBoleanos) El elemento del indice 1 debe de ser false", () => {
    expect(arrayBoleanos[1]).toBe(false);
});

it("(arrayBoleanos) El elemento del indice 2 debe ser true", () => {
    expect(arrayBoleanos[2]).toBe(true);
});
//------------------------------------------//
//------------------------------------------//
//------------------------------------------//
it("(arrayDeArray) El elemento del indice 0 debe de ser el arrayNumero", () => {
    expect(arrayDeArray[0][1]).toBe(8);
});

it("(arrayDeArray) El elemento del indice 1 debe de ser arrayBoleanos", () => {
    expect(arrayDeArray[1][1]).toBe(false);
});

it("(arrayDeArray) El elemento del indice 2 debe de ser arrayString", () => {
    expect(arrayDeArray[2][2]).toBe("Gonza");
});
it("(arrayDeArray) El elemento del indice 3 debe de ser un array", () => {
    expect(arrayDeArray[3][0]).toBe(arrayNumero.length);
});
it("(arrayDeArray) El elemento del indice 3 debe de ser un array", () => {
    expect(arrayDeArray[3][1]).toBe("hola");
});
it("(arrayDeArray) El elemento del indice 4 debe de ser un array que tenga el valor de arrayNumero en el indice 2", () => {
    expect(arrayDeArray[4][0][0]).toBe(arrayNumero[2]);
});
//-----------------------------------------//
//-----------------------------------------//
it("(arrayCombinado) El elemento del indice 0 debe de ser un string", () => {
    expect(arrayCombinado[0]).toBe("34");
});
it("(arrayCombinado) El elemento del indice 1 debe de ser un numero", () => {
    expect(arrayCombinado[1]).toBe(141);
});
it("(arrayCombinado) El elemento del indice 2 debe de ser un booleano", () => {
    expect(arrayCombinado[2]).toBe(false);
});


it("(metodoMap) sumarle 2 a cada elemento del array que se te pasó como parametro", () => {
    expect(metodoMap([6, 7, 8, 9, 10, 11, 12])).toEqual([8, 9, 10, 11, 12, 13, 14])
})
it("(metodoFilter) filtrar solo los elementos que sean banana, orange, lemon", () => {
    expect(metodoFilter(["melon", "banana", "orange", "lemon", "aple"])).toEqual(["banana", "orange", "lemon"])
})