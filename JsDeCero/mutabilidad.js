/*
Tipo de dato primitivo - Inmutable
String  number  boolean
null  undefined  simbol
bigint

Inmutable -> Se pasan por valor
No nos cambia el valor original
*/
let numero = 23
let numeroDos = numero //Copio el numero a numeroDos
numero=15 //Esto no afecto al numero
console.log(numeroDos); //Muestra 20, no 15



/*
Tipo de dato complejo - Mutable
[object  array  function]

Mutable -> Se pasan por referencia
Nos cambia el valor original
*/

let andyBox = {toy: 'Woody'};
let bonnieBox = andyBox;

andyBox.toy = 'Buzz Lightyear';
console.log(bonnieBox.toy);