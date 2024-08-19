
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function parOImpar(numero) {
//     if (numero % 2 === 0) {
//         console.log('El número es par');
//     } else {
//         console.log('El número es impar');
//     }
// }

// parOImpar(5); 


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function numeroMayor(numero1, numero2) {
//     if (numero1 > numero2) {
//         console.log(`El número ${numero1} es mayor`);
//     } else if (numero2 > numero1) {
//         console.log(`El número ${numero2} es mayor`);
//     } else {
//         console.log('Los números son iguales');
//     }
// }

// numeroMayor(6, 8);


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiploDe5(numero) {
//     if (numero % 5 === 0) {
//         console.log('El número es múltiplo de 5');
//     } else {
//         console.log('El número no es múltiplo de 5');
//     }
// }

// multiploDe5(10);
// multiploDe5(13);
// multiploDe5(15);


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function imprimirNumeros(numero) {
//     for (let i = 0; i <= numero; i++) {
//         console.log(i);
//     }
// }

// imprimirNumeros(5);
// imprimirNumeros(10);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function imprimirPalabra(palabra, numero) {
//     for (let i = 0; i < numero; i++) {
//         console.log(palabra);
//     }
// }

// imprimirPalabra('Maradona',10);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// let var1 = [4,5,7, true, 'Agustin'];

// function imprimirArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// imprimirArray([1, 2, 3, 'Maradona', true, false, 'Messi']);
// imprimirArray(var1);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


// let var1 = [4, 5, 7, true, 'Agustin', 6, false];
// function imprimirArrayMenos5(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (i !== 4) {
//             console.log(array[i]);
//         }
//     }
// }

// imprimirArrayMenos5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// imprimirArrayMenos5(var1);


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function multiplicarArrayPorNumero(array, numero) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i] * numero);
//     }
// }

// multiplicarArrayPorNumero([1, 2, 3, 4, 5], 2);
// multiplicarArrayPorNumero([10, 20, 30, 40, 50], 5);