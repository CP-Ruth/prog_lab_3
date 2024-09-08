/*1*/
const a = 15;
const b = 10;
const c = a+b;
console.log("a: "+a);
console.log("b: "+b);
console.log("La suma de a y b es: "+c);
/*2*/
let nombre = prompt("¿Cuál es tu nombre?");
console.log("¡Hola, " + nombre + "!");

/*3*/
const aa = 15;
const bb = 10;
const cc = 23
console.log("a: "+aa+" - b: "+bb+" - c: "+cc);
if (aa > bb) {
    if (aa > cc) {
        console.log("El número más grande es: " + aa);
    } else {
        console.log("El número más grande es: " + cc);
    }
} else {
    if (bb > cc) {
        console.log("El número más grande es: " + bb);
    } else {
        console.log("El número más grande es: " + cc);
    }
}

/*4*/

let number = prompt("Ingresa un número y te dire si es par o impar:")
if(number%2==0){
    alert("El número "+number+", es par.");
    console.log("El número "+number+", es par.");
} else{
    alert("El número "+number+", es impar.");
    console.log("El número "+number+", es impar.");
}

/*5*/
let i =10;
while(i>0){
    console.log(i);
    i=i-1;
}

/*6*/
let condi = true;
do{
    let number = prompt("Ingresa un número mayor a 100:");
    if(number>100){
        console.log("Ingresaste un número mayor a 100: "+ number);
        condi=false;
    }
} while (condi);

/*7*/
function esPar(number){
    return number%2==0 ;
}
console.log("El número 3 es par: "+ esPar(3));
console.log("El número 2 es par: "+ esPar(2));

/*8*/
function convertirCelsiusAFahrenheit(C){
    return F = C * 1.8 + 32;
}

console.log(30+"°C son equicalentes a "+convertirCelsiusAFahrenheit(30)+"°F");
console.log(20+"°C son equicalentes a "+convertirCelsiusAFahrenheit(20)+"°F")

/*Objetos en JavaScript*/

/*Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
*/
let persona ={
    nombre: "Juan",
    edad: 25,
    ciudad: "Mendoza",
    cambioCiudad(newCity){
        this.ciudad= newCity;
    }
};

console.log("Objeto original");
console.log(persona);
persona.cambioCiudad("San juan");
console.log(persona);

/*Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente. */

let libro={
    titulo:"Mi planta de naranja-lima",
    autor:"Sergio Martin",
    año:"1997",
    antiguo(año){
        const añoactual= new Date().getFullYear();
        if(añoactual-año>10){
            return true;
        } else{
            return false;
        }
    }
};

console.log("El libro "+libro.titulo+" es antiguo: "+libro.antiguo(libro.año));

/*Array*/

/*Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.*/

let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Números originales: "+ numeros);

let nuevosNumeros = numeros.map(element => {
    return element * 2;
});
console.log("Números multiplicados por 2: "+ nuevosNumeros);

/*Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números pares al array. Al final, imprime el array pares en la consola.*/


let pares= [];
for(let i = 1; i = 20; i++){
    if(i%2==0 && pares.length<10){
        pares.push(i);
    }
}
console.log("Los primeros 10 números pares:\n"+pares);

/*DOM*/

/*En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul*/

let parrafos = document.querySelectorAll('p');
let boton = document.getElementById('');

console.log(parrafos);
console.log(boton);

boton.addEventListener('click', ()=>{
    parrafos.forEach(element =>{
        element.style.color ='#213547';
    })
});

/*Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.*/

