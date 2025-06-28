/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
*/

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, position1, position2) {
    let memory = array[position1];
    array.splice(position1, 1, array[position2]);
    array.splice(position2, 1, memory);
    console.log(array);
}
swap(fantasticFour, 0, 3);