//Sintaxis Javascript

//Tipos de datos
console.log("Hola mundo");
console.log(2+3);

//primitivos
var numero1 = 5;
console.log(numero1);

let numero2 =1232;
console.log(typeof numero2);
console.log(numero2);

let palabra = "Huracan Sinesterra"
console.log(typeof palabra);
console.log(palabra);

let boleano = true;
console.log(typeof boleano);
console.log(boleano);

let objeto = [];
console.log(typeof objeto);

let persona = {};
console.log(typeof persona);

//operadores 

let num1 = 20;
let num2 = 3;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

console.log(num1%num2);
console.log(num1**num2);

// operadores de comparación

let compara = 3 =="3"; //compara el valor de la variable
console.log(compara);//true

let compara2 = 3 ==="3"; //compara el tipo de la variabe
console.log(compara2);//true


//operadores logicos
//conector and
 let a = 5<6; // true
 let b = 5>=6; // false
 console.log(a&&b);
 console.log(a||b);

 //sintaxis

 let nota = 2;

 if (nota == 5){
    console.log("Excelente");
 } 
 else if (nota >=4 && nota <=4.9){
    console.log("bien");
 }
 else if (nota >=3 && nota <=3.9){
    console.log("Aceptable");
 }
 else if (nota <3){
    console.log("Insuficiente");
 }

 //switch

 let opcion = 2;

 switch (opcion){
    case 1: console.log("McDonalds Doble Cuarto");
    break;
    case 2: console.log("La Bichota");
    break;
    case 3: console.log("La Criolla");
    break;
    default:console.log("Espere el seguiente burguer master");
 }

//Estruvturas de datos

let palabra2 = "descanso";
console.log(palabra2);
console.log(palabra2[3])

let concesionario = ["Tesla","Maserati","Aston Martin","Bugatti","Bentley","Audi"]
console.log(concesionario);
console.log(concesionario[4]);

//Ciclos

//while
let concesionario2 = ["Tesla","Maserati","Aston Martin","Bugatti","Bentley","Audi"]
let contador = 0;

while(contador<concesionario2.length){
    console.log(concesionario2[contador]);
    contador++;
}

//Do-while
let concesionario3 = ["Tesla","Maserati","Aston Martin","Bugatti","Bentley","Audi"]
let contador2 = 0;

do {
    console.log(concesionario3[contador2]);
    contador2++;
} while (contador2<concesionario3.length);

// For
let concesionario4 = ["Tesla","Maserati","Aston Martin","Bugatti","Bentley","Audi"]

for (let contador3 = 0; contador3<=concesionario4.length; contador3++){
    console.log(concesionario4[contador3]);
}
let concesionario5 = concesionario4;
concesionario5.push("BMW");
console.log(concesionario5);

concesionario5.pop(); // Elimina el ultimo elemento del array

concesionario5.shift(); //Elimina el primer elemento del array

concesionario5.splice(4,1); //Elimina un elemento en la posicion que le indiquemos
console.log(concesionario5);

console.log(concesionario5.indexOf("Bugatti")); //Entrega la pocision de un elemnto dentro de un array

// for-each
for (let marca of concesionario5){
    console.log(marca);
}

let arreglo = ["Hola",23,true,[1,2],3.1416];
for (let item of arreglo){
    console.log(item);
}

let animal={
    "propiedad":"valor",
    "nombre":"lia",
    "propietario":"Edwin"
}
console.log(animal);
for (let clave in animal){
    let valor = animal[clave]
    console.log(clave + " : "+ valor);
}