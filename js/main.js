//! PRIMER PREENTREGA, CALCULADORA DE IMC

// Funciones y variables

let peso = 0;
let altura = 0;

// Función para solicitar y validar el ingreso de peso y altura
function calculadoraIMC () {
    // Solicita el peso del usuario y valida que sea un número positivo
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos (ej: 70kg)"));

    while (peso <=0 || isNaN(peso)) {
        alert("Por favor, ingrese un valor válido para el peso");
        peso = parseFloat(prompt("Ingrese su peso en kilogramos (ej: 70kg)"));
    }
    
    // Solicita la altura del usuario y valida que sea un número positivo
    let altura = parseFloat(prompt("Ingrese su altura en metros (ej:1.70m)"));
    
    while (altura <=0 || isNaN(altura)) {
        alert("Por favor, ingrese un valor válido para la altura");
        altura = parseFloat(prompt("Ingrese su altura en metros (ej:1.70m)"));
    }
    // Calcula el IMC basado en el peso y la altura
    imc = (a, b) => a / (b * b) 
    const resultadoIMC = imc (peso, altura) 
    
    // Muestra el IMC calculado al usuario y una categoría basada en el valor del IMC
    alert("Su índice de masa corporal es equivalente a " + resultadoIMC.toFixed(2));
    
    if (resultadoIMC <= 16.00) {
        alert ("Usted está severamente delgado");
    } else if ((resultadoIMC > 16.00) && (resultadoIMC <= 17.00)){
        alert ("Usted está moderadamente delgado");
    } else if ((resultadoIMC > 17.00) && (resultadoIMC <= 18.50)) {
        alert ("Usted está levemente delgado");
    } else if ((resultadoIMC > 18.50) && (resultadoIMC <= 25.00)) {
        alert ("Usted está en su peso ideal");
    } else if ((resultadoIMC > 25.00) && (resultadoIMC <= 30.00)) {
        alert ("Usted tiene sobrepeso");
    } else if ((resultadoIMC > 30.00) && (resultadoIMC <= 35.00)) {
        alert ("Usted tiene obesidad leve");
    }else if ((resultadoIMC > 35.00) && (resultadoIMC <= 40.00)) {
        alert ("Usted tiene obesidad moderada");
    }else if (resultadoIMC > 40.00) {
        alert ("Usted tiene obesidad mórbida");
    }
    
    alert("Muchas gracias por usar la calculadora de IMC, que tengas buen día.")
}

// Función para permitir al usuario repetir la calculadora
function repetirCalculadora () {
    let otra = prompt("Le gustaría volver a usar la calculadora? Escriba 'Si' o 'No'");
    while (otra != "No") {
        switch (otra) {
            case "Si":
                calculadoraIMC ();
                break;
            case "No":
                break;
            default: alert ("Por favor, escriba 'Si' o 'No' para volver a usar la calculadora o finalizar el proceso");
            break;
        }
        otra = prompt("¿Le gustaría volver a usar la calculadora? Escriba 'Si' o 'No'");
    }
}


// -------- //


// Inicio del programa
alert("Bienvenido a la calculadora de Índice de Masa Corporal (IMC), por favor, ingrese sus datos:");

calculadoraIMC ();
repetirCalculadora();
// -------- //


//! ////////////////////





//! CLASE 1, VARIABLES

//TODO EJEMPLOS:



//TODO EJERCICIOS: (6/6)

/*
* 1) El usuario ingresa la base y altura de un triángulo y el programa calcula el área del mismo
*/

// const base = prompt ("Ingrese la base del triángulo");
// const altura = prompt ("Ingrese la altura del triàngulo");

// const areaTriangulo = ((base * altura)/2);

// alert (areaTriangulo);
// console.log (areaTriangulo);




/*
* 2) El usuario ingresa el lado de un cuadrado y se calcula el perímetro del mismo
*/

// const lado = parseInt (prompt("Ingrese el lado de su cuadrado"));

// const permimetroCuadrado = (lado * 4);


// alert ("El perímetro de su cuadrado es: " + permimetroCuadrado + " unidades");
// console.log ("El perímetro de su cuadrado es: " + permimetroCuadrado + " unidades");




/*
* 3) Se ingresan grados celsius y se transforman a farenheit
*/

// const celsius = parseInt (prompt("Ingrese la temperatura en grados celsius"));
// const farenheit = (celsius * (9/5)) + 32;

// alert ("La temperatura ingresada, en farenheit, es: " + farenheit + " grados");
// console.log ("La temperatura ingresada, en farenheit, es: " + farenheit + " grados");




/*
* 4) Se ingresa un nombre y un apellido yse muestra la concatenación de dicho nombre y apellido
*/

// const nombre = prompt ("Ingrese su nombre");
// const apellido = prompt ("Ingrese su apellido");

// const nombreApellido = nombre + " " + apellido;

// alert ("Usted es " + nombreApellido);
// console.log ("Usted es " + nombreApellido);




/*
* 5) Se ingresan 3 números y se calcula el promedio de los mismos
*/

// const numero1 = parseInt(prompt("Ingrese el primer número"));
// const numero2 = parseInt(prompt("Ingrese el segundo número"));
// const numero3 = parseInt(prompt("Ingrese el tercer número"));

// const promedio = (numero1 + numero2 + numero3) / 3;

// alert ("El promedio de sus números es " + promedio);
// console.log ("El promedio de sus números es " + promedio);




/*
* 6) Se ingresa una cierta cantidad de pesos(uruguayos) y se dala conversión a distintas monedas
*/

// const pesosUy = parseInt (prompt ("Ingrese la cantidad de pesos"));

// const pesosAr = (pesosUy * 23.33); 
// const usd = (pesosUy / 40.3532);
// const euro = (pesosUy / 43.8596);

// alert ("La conversión a  es igual a " + pesosAr + " pesos Argentinos");
// alert ("La conversión a  es igual a " + usd + " dólares estadounidenses" );
// alert ("La conversión a euros es igual a " + euro + " euros");

// console.log ("La conversión a  es igual a " + pesosAr + " pesos Argentinos");
// console.log ("La conversión a  es igual a " + usd + " dólares estadounidenses" );
// console.log ("La conversión a euros es igual a " + euro + " euros");

//! //////////////////





//! CLASE 2, CONTROL DE FLUJOS

//TODO EJEMPLOS:



//TODO EJERCICIOS: (10/10, 4/4)


//? CONDICIONALES 

/*
* 1) Programa donde se ingresen 2 números y se indique cuál es mayor 
*/

// const numero1 = parseInt(prompt ("Ingrese el primer número"));
// const numero2 = parseInt(prompt ("Ingrese el segundo número"));

// if (numero1 > numero2) {
//     alert ("El primer número es mayor que el segundo")
//     console.log ("El primer número es mayor que el segundo");
// } else if (numero1 == numero2) {
//     alert ("Los números son iguales")
//     console.log ("Los números son iguales");
// } else {
//     alert ("El segundo número es mayor que el primero")
//     console.log ("El segundo número es mayor que el primero");
// }




/*
* 2) El costo del helado es $5, escriba un programa donde el usuario ingresa la cantidad de rlado deseada y se le da el precio
*/

// const helado = parseInt(prompt("Ingrese la cantidad de helado que desea pedir, a $5 cada helado"));

// const precioHelado = (helado * 5);

// alert ("Por " + helado + " helado(s) usted deberá abonar " + precioHelado + " pesos")
// console.log ("Por " + helado + " helado(s) usted deberá abonar " + precioHelado + " pesos")




/*
* 3) Escriba un programa donde se solicita la dad del usuario y se calcula la edad de nacimiento tomando en cuenta que eñ "año actual" es 2022
*/

// const edad = parseInt (prompt("Ingrese su edad"));

// const anioNacimiento = (2022 - edad);

// alert ("Su año de nacimiento es " + anioNacimiento);
// console.log ("Su año de nacimiento es " + anioNacimiento);




/* 
* 4) Un programa donde se ingresen 3 notas, y si el promedio de las mismas es igual o mayor a 4, se notifique "aprobado" con un alert
*/

// const nota1 = parseInt(prompt("Ingrese su primer nota"));
// const nota2 = parseInt(prompt("Ingrese su segunda nota"));
// const nota3 = parseInt(prompt("Ingrese su tercer nota"));

// const promedio = (nota1 + nota2 + nota3) / 3;

// if (promedio >= 4) {
//     alert ("Aprobado!");
//     console.log ("Aprobado!");
// } else {
//     alert ("Desaprobado :(");
//     console.log ("Desaprobado :(");
// }




/*
* 5) Un programa donde se pida el año de macimiento. En caso de ser mayor de 18, que se solicite
* el nombre y apellido, para luego mostrar el texto con el formato "Hola -nombre y apellido-, tu edad atual es: -edad-"
*/

// const nacimiento = parseInt(prompt("Ingrese su año de nacimiento"));

// if ((2024 - nacimiento) >= 18) {
//     const nombre = prompt("Ingrese su nombre");
//     const apellido = prompt("Ingrese su apellido");
//     alert ("Hola, " + nombre + " " + apellido + ", tu edad actual es " + (2024 - nacimiento))
//     console.log ("Hola, " + nombre + " " + apellido + ", tu edad actual es " + (2024 - nacimiento));
// } else {
//     alert ("No eres mayor de 18");
//     console.log ("No eres mayor de 18");
// }



/* 
* 6) Escribir un programa que permita calcular el costo total de un producto con su IVA. Para esto, solicite al usuario
* el precio del producto, calcule su IVA (22%), y muéstrele en pantalla con un alert el precio final
*/

// const precio = parseInt(prompt("Ingrese el precio del producto"));

// const precioFinal = (precio * 1.22);

// alert ("El precio final de su producto es " + precioFinal);
// console.log ("El precio final de su producto es " + precioFinal);




/*
* 7) Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera
* viajar. Teniendo en cuenta estos valores:
* - Colombia: $40
* - México: $50
* - Brasil: $30
* - Argentina: $20
* - Chile: $20
* - Ecuador: $30
* - Perú: $40
* - Estados Unidos: $50
* Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
* NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el
* nombre del lugar
*/

// const pais = prompt("Ingrese el país al que desea viajar")

// if ((pais === "Colombia") || (pais === "colombia")) {
//     alert ("El costo de su viaje será: $" + 40);
// } else if ((pais === "México") || (pais === "méxico") ||(pais === "Mexico") || (pais === "mexico")) {
//     alert ("El costo de su viaje será: $" + 50);
// } else if ((pais === "Brasil") || (pais === "brasil")) {
//     alert ("El costo de su viaje será: $" + 30);
// } else if ((pais === "Argentina") || (pais === "argentina")) {
//     alert ("El costo de su viaje será: $" + 20);
// } else if ((pais === "Chile") || (pais === "chile")) {
//     alert ("El costo de su viaje será: $" + 20);
// } else if ((pais === "Ecuador") || (pais === "ecuador")) {
//     alert ("El costo de su viaje será: $" + 30);
// } else if ((pais === "Perú") || (pais === "perú") ||(pais === "Peru") || (pais === "peru")) {
//     alert ("El costo de su viaje será: $" + 40);
// } else if ((pais === "Estados Unidos") || (pais === "Estados unidos") ||(pais === "estados unidos")) {
//     alert ("El costo de su viaje será: $" + 50);
// } else {
//     alert ("No podemos llevarlo al país al que desea viajar")
// }




/*
* 8) Escriba un programa en dónde se le solicite al usuario su nombre y edad, y según
* los siguientes casos muéstrele un mensaje de que tiene el acceso permitido:
* a) Si el nombre es “Pedro” o “pedro” y su edad es mayor de 18
* b) Si el nombre es “Juan”, “JUAN” o “juan” y su edad es mayor a 21
* c) Si el nombre es “paula” y su edad es mayor a 25
*/

// const nombre = prompt("Ingrese su nombre")
// const edad = prompt("Ingrese su edad")

// if (((nombre === "Pedro") || (nombre === "pedro")) && (edad > 18)) {
//     alert ("Acceso permitido");
// } else if (((nombre === "Juan") || (nombre === "JUAN") || (nombre === "juan")) && (edad > 21)) {
//     alert ("Acceso permitido");
// } else if ((nombre === "paula") && (edad > 25)) {
//     alert ("Acceso permitido");
// } else {
//     alert ("Acceso denegado");
// }



/*
* 9) Escriba un programa en el cual se le pida el peso y altura al usuario, calcule su IMC
* y muestre si tiene bajo peso, peso normal, sobrepeso o es obeso.
*/

// const peso = parseFloat(prompt("Ingrese su peso en kilogramos"));
// const altura = parseFloat(prompt("Ingrese su altura en metros"));

// const imc = peso / Math.pow(altura, 2);

// alert ("Su índice de de masa corporal da " + imc);

// if (imc <= 16.00) {
//     alert ("Usted está severamente delgado");
// } else if ((imc > 16.00) && (imc <= 17.00)){
//     alert ("Usted está moderadamente delgado");
// } else if ((imc > 17.00) && (imc <= 18.50)) {
//     alert ("Usted está levemente delgado");
// } else if ((imc > 18.50) && (imc <= 25.00)) {
//     alert ("Usted está en su peso ideal");
// } else if ((imc > 25.00) && (imc <= 30.00)) {
//     alert ("Usted tiene sobrepeso");
// } else if ((imc > 30.00) && (imc <= 35.00)) {
//     alert ("Usted tiene obesidad leve");
// }else if ((imc > 35.00) && (imc <= 40.00)) {
//     alert ("Usted tiene obesidad moderada");
// }else if (imc > 40.00) {
//     alert ("Usted tiene obesidad mórbida");
// }




/* 
* 10)  Escriba un programa en el cual se ingresen dos números y devuelva la diferencia
* entre el mayor y el menor. Por ejemplo: Si se ingresan 10 y 8, tiene que mostrar 2
* (Que es el resultado de 10 - 8).
*/

// const numero1 = parseFloat(prompt("Ingrese su primer número"))
// const numero2 = parseFloat(prompt("Ingrese su segundo número"))

// if (numero1 > numero2) {
//     alert ("La diferencia entre los números es igual a " + (numero1 - numero2));
// } else if (numero2 > numero1) {
//     alert ("La diferencia entre los números es igual a " + (numero2 - numero1);
// } else {
//     alert ("Los numeros son iguales");
// }


//? OPERADORES LÓGICOS

/*
* 1) Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true,
* determine el valor de cada expresión lógica:
*/

// a) (X && Y) || (X && Z) = TRUE
// b) (X || !Y) && (!X || Z) = FALSE
// c) X || Y && Z = TRUE
// d) !(X || Y) && Z = TRUE
// e) X || Y || X && !Z && !Y = FALSE
// f) !X || !Y || Z && X && !Y = TRUE




/*
* 2) Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.
*/

// let letra = prompt("Ingrese una vocal")

// if ((letra === "a") || (letra === "e") || (letra === "i") || (letra === "o") || (letra === "u") ||(letra === "A") || (letra === "E") || (letra === "I") || (letra === "O") || (letra === "U")) {
//     alert ("Tu letra es una vocal");
// } else {
//     alert ("Tu letra no es vocal");
// }




/*
* 3) Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre
* un mensaje en pantalla si:
* - El nombre es “Gabriel” y tiene más de 24 años
* - El nombre es “María” y tiene entre 28 y 35 años
*/

// let nombre = prompt("Ingrese su nombre")
// let edad = parseInt(prompt("Ingrese su edad"))

// if (((nombre === "Gabriel") && (edad > 24))) {
//     alert ("Su nombre es Gabriel y es mayor de 24 años");
// } else if (((nombre === "María") && (edad > 28) && (edad < 35))) {
//     alert ("Usted es María, y tiene una edad de entre 28 y 35 años");
// } else {
//     alert ("Usted, o no es Gabriel, o no es María, o no cumple con los rangos etarios requeridos")
// }




/*
* 4) Escriba un programa en donde se le solicite al usuario que ingrese 2 números y le
* muestre en pantalla un mensaje cuando su suma sea 10 y su división tenga como
* resto 0.
*/

// let numero1 = parseFloat(prompt("Ingrese el primer número"));
// let numero2 = parseFloat(prompt("Ingrese el segundo número"));

// if ((numero1 + numero2 == 10) && (numero1 % numero2 == 0)) {
//     alert ("La suma de ambos números es 10 y, al dividir el primer número con el segundo, el resto da 0");
// } else {
//     alert ("La suma de ambos números no es 10 y/o, al dividir el primer número con el segundo, el resto no 0");
// }

//! //////////////////





//! CLASE 3, CICLOS E ITERACIONES

//TODO EJEMPLOS:



//TODO EJERCICIOS: (11/17)


/*
* 1) Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese
* “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por
* una coma (,).
*/

/*
!     SALTEADO
*/




/*
* 2) Realizar un programa donde se le pida al usuario ingresar un número positivo y
* luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0.
* NOTA: Tener en cuenta validar que es un número positivo el que ingresó.
*/

// const numero = prompt("Ingrese un número positivo")


// if (numero > 0) {
//     for (let i = numero; i >= 0; i-- ) {
//         console.log ("Su númro es " + i);
//     }
// } else {
//     alert ("Su número no es positivo")
// }




/*
* 3) Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar
* a 0 pero sólo mostrando los números que son pares.
*/

// let numero = parseInt(prompt("Ingrese un numero"));

// if (numero % 2 == 0) {
//     for (let i = numero; i >=0; i-=2) {
//         console.log (i);
//     }
// } else if (numero % 2 != 0){
//     console.log (numero)
//     let impar = numero - 1
//     for (let i = impar; i >=0; i-=2) {
//         console.log (i);
//     }
// }



/*
* 4) Realizar un programa en donde se le pida al usuario 2 números y realice su
* multiplicación mediante sumas sucesivas (Ej.: El usuario ingresa los números 2 y 3,
* por lo cual la multiplicación sería: 2 + 2 + 2 O 3 + 3 y tendría que devolver 6).
*/

// let numero1 = parseInt(prompt("Ingrese el primer número"));
// let numero2 = parseInt(prompt("Ingrese el segundo número"));
// let resultado = 0;
// let contador = 0;

// while (contador < numero2) {
//     resultado = resultado + numero1;
//     contador++;
//     console.log (resultado);
// }




/*
* 5) Realizar un programa en donde se le pida al usuario 2 números y realice su división
* mediante restas sucesivas (Ej.: El usuario ingresa los números 6 y 3, por lo cual la
* división sería: 6 - 3 - 3 y tendría que devolver 2).
*/

// let numero1 = parseInt(prompt("Ingrese el primero número"));
// let numero2 = parseInt(prompt("Ingrese el segundo número"));

// let contador = 0;

// if (numero1 % numero2 == 0) {
//     while (numero1 >= numero2) {
//         console.log (numero1);
//         numero1 = numero1 - numero2;
//         contador ++;
//     }
//     console.log (numero1);
//     console.log ("El resultado es: " + contador)
// } else {
//     console.log ("Sus números no son divisibles entre sí")
// }




/*
* 6) Realice el problema anterior pero ahora muestre el resultado junto al resto de la
* división.
*/

// let numero1 = parseInt(prompt("Ingrese el primero número"));
// let numero2 = parseInt(prompt("Ingrese el segundo número"));

// let contador = 0;

// if (numero1 % numero2 == 0) {
//     while (numero1 >= numero2) {
//         console.log (numero1);
//         numero1 = numero1 - numero2;
//         contador ++;
//     }
//     console.log (numero1);
//     console.log ("El resultado es: " + contador)
// } else {
//     resto = numero1 % numero2
//     while (numero1 >= numero2) {
//         console.log (numero1);
//         numero1 = numero1 - numero2;
//         contador ++;
//     }
//     console.log (numero1);
//     console.log ("El resultado es: " + contador + ", con resto " + resto);
// }




/*
* 7) Realice un programa que dados dos números, muestre todos los números que están
* en medio de ambos. (Ej: Ingreso 2 y 6, me tiene que mostrar 3, 4 y 5).
*/

// let numero1 = parseInt(prompt("Ingrese el primer número"));
// let numero2 = parseInt(prompt("Ingrese el primer número"));

// if (numero1 < numero2) {
//     for (let i = numero1 + 1; i < numero2; i++) {
//         console.log (i);
//     }
// } else {
//     for (let i = numero2 + 1; i < numero1; i++) {
//         console.log (i)
//     }
// }




/*
* 8) Genera y muestra los primeros N números de la secuencia de Fibonacci, donde N es
* un número ingresado por el usuario.
* NOTA: En matemáticas, la sucesión de Fibonacci (a veces mal llamada serie de
* Fibonacci) es la sucesión infinita de números naturales.
* 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377… La sucesión comienza con los números
* 0 y 1, y a partir de estos, cada elemento es la suma de los dos anteriores.
*/

// let numero1 = 1
// let numero2 = 1
// let numero3 = 0

// let contador = parseInt(prompt("Ingrese la cantidad de veces que quiere iterar la secuencia de Fibonacci"));

// for (let i = 0; i <= contador; i++){
//     numero3 = numero1 + numero2
//     numero1 = numero2 + numero3
//     numero3 = numero2 + numero1
// }

/*
    !INCOMPLETO
*/



/*
* 9) Realice un programa en donde se le solicite un número al usuario y le muestre en
* pantalla cuántos dígitos tiene. (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso
* 115 me tiene que mostrar 3).
* AYUDA: Dividir por 10 a un número le remueve un dígito.
*/

// let numero = parseInt(prompt("Ingrese un número"));
// let contador = 0;

// while (numero > 0) {
//     numero = parseInt(numero / 10);
//     contador++;
// }

// console.log ("Su número tiene un total de " + contador + " caracteres.");




/*
* 10) Escriba un programa en dónde se le solicite un número al usuario y determine si es
* un número primo o no.
*/

// let numero = parseInt(prompt("Ingrese un número"));
// let contador = 0

// for (let i = 0; i <= 100; i++) {
//     if (numero % i == 0) {
//         contador++
//     }
// }

// if (contador == 2) {
//     console.log ("Su número es primo");
// } else {
//     console.log ("Su número no es primo")
// }




/*
* 11) Escriba un programa en el que el usuario ingrese un número y utilice bucles for
* anidados para generar un patrón de asteriscos como un triángulo. Por ejemplo, si el
* usuario ingresa 5, debería imprimir:
    *
    **
    ***
    ****
    *****
*/

// let numero = parseInt(prompt("Ingrese su múmero"));

// for (let i = 0; i <= numero; i++) {
//     console.log ("*");
//     console.log ("**");
//     console.log ("***");
//     console.log ("****");
//     console.log ("*****");
//     console.log (" ");
// }




/*
* 12) Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre
* todos los que ingrese calcular cual es el mayor, el menor y la media.
*/

// let cantidad = parseInt(prompt("Ingrese la cantidad de números"));

// for (let i = 1; i <= cantidad; i++) {
//     parseInt(prompt("Ingrese su número" + "(" + i + ")" ))
// }


/*
!     INCOMPLETO
*/




/*
* 13) Hacer un programa en donde el usuario ingrese un mes y se le muestre en pantalla
* a qué estación pertenece.
*/

// let mes = parseInt(prompt("Ingrese el número del mes"));

// if ((mes > 0) && (mes < 4)) {
//     console.log ("Este mes corresponde a la estación verano");
// } else if ((mes > 3) && (mes < 7)) {
//     console.log ("Este mes corresponde a la estación otoño");
// } else if ((mes > 6) && (mes < 10)) {
//     console.log ("Este mes corresponde a la estación invierno");
// } else if ((mes > 9) && (mes < 13)){
//     console.log ("Este mes corresponde a la estación primavera");
// } else {
//     console.log ("Mes inváildo")
// }

/*
?     No sé cómo se haría con ciclos
*/




/*
* 14) Idem ejercicio anterior pero en este caso que se le muestre la cantidad de días que
* tiene el mes
*/

/*
?     No sé cómo se haría con ciclos
*/




/*
* 15) Realizar un programa en donde el usuario ingrese un día de la semana y se le
* muestre en pantalla:
* a) Si es el comienzo de la semana
* b) Si es fin de semana
* c) Si es mitad de semana
*/

/*
?     Se haría fácil con condicionales, pero no veo cómo se haría con ciclos
*/




/*
* 16) Hacer un programa en el cual se ingrese una figura (Triángulo, cuadrado, círculo y
* rectángulo) y dependiendo que figura elija, se le pida base, altura o radio y calcular
* el área.
*/

// let figura = parseInt(prompt("Ingrese su figura: 1- Triángulo, 2- Cuadrado, 3- Círculo, 4- Rectángulo. 0- Salir."));

// while (figura != 0) {
//     switch (figura) {
//         case 1:
//             console.log ("Usted seleccionó: Triángulo");
//             let base = parseFloat(prompt("Ingrese la base de su triángulo"));
//             let altura = parseFloat(prompt("Ingrese la altura de su triángulo"));
//             let areaTriangulo = (base * altura) / 2;
//             console.log ("El área de su triángulo es: " + areaTriangulo + " unidades cuadradas");
//             break;
//         case 2:
//             console.log ("Usted seleccionó: Cuadrado");
//             let ladoCuadrado = parseFloat(prompt("Ingrese el lado de su cuadrado"));
//             let areaCuadrado = ladoCuadrado * ladoCuadrado;
//             console.log ("El área de su triángulo es: " + areaCuadrado + " unidades cuadradas");
//             break;
//         case 3:
//             console.log ("Usted seleccionó: Círculo");
//             let radio = parseFloat(prompt("Ingrese el radio de su círculo"));
//             let areaCirculo = Math.PI * (radio * radio);
//             console.log ("El área de su círculo es: " + areaCirculo + " unidades cuadradas");
//             break;
//         case 4:
//             console.log ("Usted seleccionó: Rectángulo");
//             let largoRectangulo = parseFloat(prompt("Ingrese el largo de su rectángulo"));
//             let anchoRectangulo = parseFloat(prompt("Ingrese el ancho rectnángulo"));
//             let areaRectangulo = largoRectangulo * anchoRectangulo;
//             console.log ("El área de su triángulo es: " + areaRectangulo + " unidades cuadradas");
//             break;
//         default: 
//             console.log ("Opción inválida");
//             break;
//     }
//     figura = parseInt(prompt("Ingrese su figura: 1- Triángulo, 2- Cuadrado, 3- Círculo, 4- Rectángulo. 0- Salir."));
// }





/*
* 17) Realizar un programa en el cual se ingrese el departamento del trabajador (A, B, C o
* D), la cantidad de horas trabajadas y se calcule cuánto se le tiene que pagar:
* a) Trabajadores del departamento A: Cobran $25 la hora
* b) Trabajadores del departamento B: Cobran $50 la hora
* c) Trabajadores del departamento C: Cobran $75 la hora
* d) Trabajadores del departamento D: Cobran $100 la hora
*/

// let departamento = prompt("Ingrese el departamento del trabajador: A, B, C o D. Presione 0 para salir de éste menú.");


// while (departamento != 0) {
//     switch (departamento) {
//         case "A":
//             let horasA = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
//             console.log ("El trabajador ha de cobrar " + 25 * horasA);
//             break;
//         case "B":
//             let horasB = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
//             console.log ("El trabajador ha de cobrar " + 50 * horasB);
//             break;
//         case "C":
//             let horasC = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
//             console.log ("El trabajador ha de cobrar " + 75 * horasC);
//             break;
//         case "D":
//             let horasD = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
//             console.log ("El trabajador ha de cobrar " + 100 * horasD);
//             break;
//         default: 
//             console.log("Opción inválida");
//             break;
//     }
//     departamento = prompt("Ingrese el departamento del trabajador: A, B, C o D. Presione 0 para salir de éste menú.");
// }

//! //////////////////





//! CLASE 4, FUNCIONES

//TODO EJEMPLOS:



//TODO EJERCICIOS: (12/13)

/*
* 1) Escribir una función que reciba un número y devuelva su cuadrado
*/

// let numero = parseInt(prompt("Ingrese su numero"));

// function cuadrado (a) {
//     return a*a;
// }

// console.log (cuadrado (numero));


//!     Con función flecha

// let numero = parseInt(prompt("Ingrese su numero"));

// cuadrado = (a) => a * a; 

// console.log (cuadrado (numero));




/*
* 2) Escribir la función esPar que reciba un número y devuelva true si es par y false si no
* lo es
*/

// let numero = parseInt(prompt("Ingrese su numero"));

// function esPar (a) {
//     return a % 2 == 0;
// }

// if (esPar(numero)) {
//     console.log ("El número es par");
// } else {
//     console.log ("El número no es par");
// }


//!     Con función flecha

// let numero = parseInt(prompt("Ingrese su numero"));

// esPar = (a) => a % 2 == 0;

// if (esPar(numero)) {
//     console.log ("El número es par");
// } else {
//     console.log ("El número no es par");
// }




/*
* 3) Escribir la función esMultiploDe4 en la que se reciba un número y devuelva true si
* es múltiplo y false si no lo es.
*/

// let numero = parseInt(prompt("Ingrese su numero"));

// function esMultiploDe4 (a) {
//     return a % 4 == 0;
// }

// if (esMultiploDe4(numero)) {
//     console.log ("El número es múltiplo de 4");
// } else {
//     console.log ("El número no es múltiplo de 4")
// }


//!     Con función flecha

// let numero = parseInt(prompt("Ingrese su numero"));

// esMultiploDe4 = (a) => a % 4 == 0;

// if (esMultiploDe4(numero)) {
//     console.log ("El número es múltiplo de 4");
// } else {
//     console.log ("El número no es múltiplo de 4")
// }




/*
* 4) Escribir una función que reciba 2 números como parámetros y devuelva el resultado
* de su multiplicación
*/

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// function multiplicación (a, b) {
//     return a * b;
// }

// console.log (multiplicación(numero1, numero2));


//!     Con función flecha

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// multiplicacion = (a, b) => a * b;

// console.log (multiplicaciossssn(numero1, numero2));




/*
* 5) Escribir una función que reciba 2 números como parámetros y devuelva el que es
*mayor
*/

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// function mayor (a, b) {
//     if (a > b) {
//         return "El primer número es mayor que el segundo";
//     } else if (a < b) {
//         return "El segundo número es mayor que el primero";
//     } else {
//         return "Los números son iguales";
//     }
// }

// console.log (mayor (numero1, numero2));


//!     Con función flecha

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// mayor = (a, b) => {if (a > b) {return "El primer número es mayor que el segundo";} else if (a < b) {return "El segundo número es mayor que el primero";} else {return "Los números son iguales";}}

// console.log (mayor (numero1, numero2));




/*
* 6) Escribir una función que reciba 2 números como parámetros y devuelva:
* a) Si el primer número es mayor que el segundo, devuelva 1
* b) Si el segundo número es mayor que el primero, devuelva -1
* c) Si ambos números son iguales, devuelva un 0
*/

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// function mayor (a, b) {
//     if (a > b) {
//         return "1";
//     } else if (a < b) {
//         return "-1";
//     } else {
//         return "0";
//     }
// }

// console.log (mayor (numero1, numero2));


//!     Con función flecha

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));

// mayor = (a, b) => {if (a > b) {return "1";} else if (a < b) {return -1;} else {return 0;}}

// console.log (mayor (numero1, numero2));




/*
* 7) Escribir una función que reciba 4 números como parámetros y devuelva su
* promedio.
*/

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));
// let numero3 = parseFloat(prompt("Ingrese su tercer numero"));
// let numero4 = parseFloat(prompt("Ingrese su cuarto numero"));

// function promedio (a, b, c, d) {
//     return (a + b + c + d) / 4;
// }

// console.log(promedio(numero1, numero2, numero3, numero4));


//!     Con función flecha

// let numero1 = parseFloat(prompt("Ingrese su primer numero"));
// let numero2 = parseFloat(prompt("Ingrese su segundo numero"));
// let numero3 = parseFloat(prompt("Ingrese su tercer numero"));
// let numero4 = parseFloat(prompt("Ingrese su cuarto numero"));

// promedio = (a, b, c, d) => (a + b + c + d) / 4;

// console.log(promedio(numero1, numero2, numero3, numero4));




/*
* 8) Escribir la función areaRectangulo(base, altura), la cual recibe los parámetros
* base y altura que son números y tiene que devolver su area.
* NOTA: La fórmula del área de un rectangulo es base * altura
*/

// let base = parseFloat(prompt("Ingrese su tercer la base de su rectángulo"));
// let altura = parseFloat(prompt("Ingrese su la altura de su rectángulo"));

// function areaRectangulo (base, altura) {
//     return (base * altura);
// }

// console.log("El área de su rectángulo es de " + areaRectangulo(base, altura) + " unidades cuadradas");


//!     Con función flecha

// let base = parseFloat(prompt("Ingrese su tercer la base de su rectángulo"));
// let altura = parseFloat(prompt("Ingrese su la altura de su rectángulo"));

// areaRectangulo = (base, altura) => base * altura;

// console.log("El área de su rectángulo es de " + areaRectangulo(base, altura) + " unidades cuadradas");




/*
* 9) Escribir una función que le pida al usuario cadenas de texto hasta que ingrese
* “Salir”. Al ingresar “Salir” la función tiene que mostrar en pantalla los textos
* concatenados
*/

// let texto = prompt("Ingrese su texto aquí. Escriba 'Salir' para terminar el proceso");

// while (texto != "Salir") {

// }

/*
!     INCOMPLETO
*




/*
* 10) Escribir una función que le pida al usuario un número entero entre 1 y 20 y devuelva
* el número que ingresó. Se necesita validar que el número sea entre 1 y 20, por lo
* que si el usuario ingresa un número erróneo se le tiene que volver a pedir hasta que
* ingrese un número correcto.
*/

// function validarNumero () {
//     let numero = parseFloat(prompt("Ingrese su número (entre 1 y 20)"));
//     while ((numero < 1) || (numero > 20)) {
//         console.log ("Número inválido");
//         numero = parseFloat(prompt("Ingrese su número (entre 1 y 20)"));
//     }
//     return numero;
// }

// console.log ("Su número es " + validarNumero());




/*
* 11) Escriba una función que dado un número n, devuelva su factorial. El factorial de un
* número n se calcula como n! = n * (n-1) * (n-2) * ... * 1.
*/

// let resultado = 1;

// function factorial () {
//     let numero = parseInt(prompt("Ingrese su número"));
//     for (i = numero; i >= 1; i--) {
//         resultado = numero * resultado;
//         numero--;
//     }
//     return resultado
// }

// console.log (factorial());




/*
* 12) Escriba una función que reciba un número como parámetro e imprima su tabla de
* multiplicación desde 1 hasta 10.
*/

// function tabla () {
//     let numero = parseInt(prompt("Ingrese su número"));
//     if (numero >= 1 && numero <= 10) {
//         for (let i = 0; i <= 10; i++) {
//             console.log (numero + " x " + i + " = " + (numero * i));
//         }
//     } else {
//         console.log ("Número inválido")
//     }
// }

// console.log (tabla());




/*
* 13) Escriba una función que reciba un número y muestre todos los divisores que tiene. 
*/

// let contador = 0

// function divisores () {
//     let numero = parseInt(prompt("Ingrese su número"));
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i == 0) {
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log (divisores());

//! //////////////////





//! CLASE 5, OBJETOS

//TODO EJEMPLOS:



//TODO EJERCICIOS: (0/8)


/*
* 1) Crear una clase llamada Cancion que contenga los atributos: titulo y autor. Crear su
* constructor y tiene que poseer los siguientes métodos:
* a) mostrarTitulo() que muestre el título de la canción
* b) mostrarAutor() que muestre el autor de la canción
*/




/*
* 2) Crear una clase llamada Persona que contenga los atributos: nombre, edad y DNI.
* Crear su constructor y tiene que poseer 2 métodos:
* a) mostrar() que muestre los datos de la persona
* b) esMayor() que devuelva un valor booleano si es mayor de edad o no
*/




/*
* 3) Crear una clase llamada Cuenta que contenga los siguientes atributos: titular (que
* es una persona) y cantidad (que pueden ser decimales). Crear su constructor y tiene
* que poseer los siguientes métodos:
* a) mostrar() que muestra los datos de la cuenta
* b) ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es
* negativa no se hace nada)
* c) retirar(cantidad) se retira una cantidad de la cuenta.
*/




/*
* 4) Crear una clase llamada Calculadora que contenga los siguientes atributos:
* numero1 y numero2. Crear su constructor y tiene que poseer los siguientes
* métodos:
* a) multiplicar() que multiplique los 2 números y devuelva su resultado
* b) sumar() que sume los 2 números y devuelva su resultado
* c) restar() que reste los 2 números y devuelva su resultado
* d) dividir() que divida los 2 números y devuelva su resultado
*/




/*
* 5) Crear una clase llamada Libro que contenga los siguientes atributos: título, autor y
* prestado (booleano). Crear su constructor y tiene que poseer los siguientes
* métodos:
* a) prestamo() que preste el libro (poner prestado en true). Si el libro se
* encuentra prestado, debe mostrar un alert informándolo
* b) devolver() que devuelva el libro (poner prestado en false). Si el libro no se
* encuentra prestado, debe mostrar un alert informándolo.
*/




/*
* 6) Crear una clase llamada Cafetera que contenga los atributos: cantidadMaxima
* (Entero) y cantidadActual (Entero). Crear su constructor y tiene que poseer los
* siguientes métodos:
* a) servirTaza() la cual simula la acción de servir una taza. Tiene que descontar
* en 1 la cantidadActual y validar que no se pueda servir una taza si no hay
* cantidad suficiente.
* b) vaciarCafetera() que ponga la cantidadActual en 0
* c) agregarCafe(cantidad) que sume la cantidad de cafés indicados a la
* cantidadActual. Validar que no pueda haber más capacidad que la
* capacidadMaxima.
* d) llenarCafetera() que ponga en la cantidadActual el valor de cantidadMaxima.
* Validar que si la cafetera está llena ya, no la pueda llenar otra vez.
*/




/*
* 7) Crear un objeto Coche con las propiedades marca, modelo y año. Crea un método
* acelerar() que aumente la velocidad del coche en 10 km/h y un método frenar() que
* disminuya la velocidad del coche en 10 km/h.
*/




/*
* 8) Crear un objeto Producto con las propiedades nombre, precio y stock. Crea un
* método vender() que reduce el stock del producto en 1 unidad.
*/