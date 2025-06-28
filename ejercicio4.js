const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];
/*4.1 Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto 
y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.*/
function findArrayIndex(array, text) {
    textPosition = 0;
    for (let i = 0; i < array.length; i++) {
        if (text.toLowerCase() === array[i].toLowerCase()) {
            console.log("La posición del texto es: " + i)
            return i;
        }
    }
    console.log("Vaya, el texto introducido no ha sido encontrado en el array!")
}

findArrayIndex(mainCharacters, "Luke");
findArrayIndex(mainCharacters, "Pepe");
findArrayIndex(mainCharacters, "Obi-Wan");
findArrayIndex(mainCharacters, "han solo");

/*
2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, 
pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), 
llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

function removeItem(array, text) {
    let position = findArrayIndex(array, text);
    if (position == undefined) {
        console.log("El elemento no existe dentro del array, no se puede eliminar");
        return;
    }
    array.splice(position, 1);
    console.log("Elemento eliminado. Mostrando array resultante");
    console.log(array);
    return array;
}

removeItem(mainCharacters, "luke");
removeItem(mainCharacters, "pepe");