//! SEGUNDA PREENTREGA, UNA VERDULERÍA

/*
* OBJETOS
*/

//* Lista original
const productos = [
    {verdura: "Papa", precio: 15, stock: 60},
    {verdura: "Zanahoria", precio: 40, stock: 20},
    {verdura: "Lechuga", precio: 30, stock: 40},
    {verdura: "Morron", precio: 70, stock: 15},
]


/*
* FUNCIONES
*/

function comprar(verdura, cantidad) {
    // Buscar el producto en el array de productos
    const productoEncontrado = productos.find(producto => producto.verdura.toLowerCase() === verdura.toLowerCase());
    // Verificar si el producto existe
    if (productoEncontrado) {
        // Verificar si hay suficiente stock
        if (productoEncontrado.stock >= cantidad) {
            productoEncontrado.stock -= cantidad;  // Restar la cantidad comprada del stock
            return `Compra exitosa. Stock restante de ${productoEncontrado.verdura}: ${productoEncontrado.stock}`;
        } else {
            return `No hay suficiente stock de ${productoEncontrado.verdura}. Stock actual: ${productoEncontrado.stock}`;
        }
    } else {
        return "El producto seleccionado no está en nuestro catálogo.";
    }
}


// Constructor para añadir productos
class Producto {
    constructor (verdura, precio, stock) {
        this.verdura = verdura;
        this.precio = parseFloat(parseFloat(precio).toFixed(2));
        this.stock = parseInt(stock); 
    }
    
    añadirALaLista = () => {productos.push(this);}
}


// Función para que el usuario agrege un producto por cuenta propia
function añadirProdctoPorPrompt () {
    const nombre = prompt("Ingrese el nombre del producto que va a añadir");
    const precio = prompt("Ingrese el precio del producto que va a añadir");
    const stock = prompt("Ingrese el stock del producto que va a añadir");

    // Crear una nueva instancia de Producto con los valores ingresados
    const nuevoProducto = new Producto(nombre, precio, stock);

    // Añadir el nuevo producto a la lista
    nuevoProducto.añadirALaLista();
}


// Función para sumarle stock a los productos que se encuentran en la lista
function añadirProductosAlStock () {
    let nombreDeProductoAAñadir = prompt ("Ingrese el nombre del producto al que desea añadirle unidaders existentes");
    let productoASumar = productos.find(producto => producto.verdura.toLowerCase() === nombreDeProductoAAñadir.toLowerCase());

    // Mientras no se encuentre el producto, solicitar nuevamente el input
    while (!productoASumar) {
        alert("Este producto no se encuentra disponible. Intente de nuevo.");
        nombreDeProductoAAñadir = prompt("Ingrese el nombre del producto al que desea añadirle unidades existentes");
        productoASumar = productos.find(producto => producto.verdura.toLowerCase() === nombreDeProductoAAñadir.toLowerCase());
    }

    let cantidadDeProductosAAñadir = parseInt(prompt("Ingrese la cantidad de unidades que desea añadir al stock actual"));
    if (!isNaN(cantidadDeProductosAAñadir)) {
        productoASumar.stock += cantidadDeProductosAAñadir;
        alert(`Se añadieron ${cantidadDeProductosAAñadir} unidades al stock de ${productoASumar.verdura}. Stock actual: ${productoASumar.stock}`);
    } else {
        while (isNaN(cantidadDeProductosAAñadir) || cantidadDeProductosAAñadir < 0) {
            alert("Cantidad inválida.");
            cantidadDeProductosAAñadir = parseInt(prompt("Ingrese la cantidad de unidades que desea añadir al stock actual"));
        }
    }
}



/*
* INICIO DEL PROGRAMA
*/

alert("Bienvenido a la verdulería Las Divinas. Por favor, seleccione una de las siguientes acciones:");
let accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));

while (accion != 0) {
    switch (accion) {
        case 1:
            alert("Nuestro catálogo incluye los siguientes productos actualmente:");
            productos.forEach(element => {
                alert(element.verdura + ", a $" + element.precio + ". Existencias actuales: " + element.stock + " unidades.");
            });
            console.log(productos);
            accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));
            break;
        case 2: 
            let productoAComprar = prompt("Ingrese el producto que desea comprar.");

            // Buscar el producto en el catálogo
            let productoEncontrado = productos.find(producto => producto.verdura.toLowerCase() === productoAComprar.toLowerCase());
            
            // Verificar si el producto está en la lista
            while (!productoEncontrado) {
                productoAComprar = prompt("El producto ingresado no corresponde a ninguno en la lista. Ingrese un producto válido para continuar.");
                productoEncontrado = productos.find(producto => producto.verdura.toLowerCase() === productoAComprar.toLowerCase());
            }
            
            let cantidadAComprar = parseInt(prompt("Ingrese la cantidad que desea comprar del producto. Si desea volver al menú anterior, ingrese 0."));
            while (cantidadAComprar < 0 || isNaN(cantidadAComprar)) {
                alert("El valor ingresado no es válido para efectuar la compra. Porfavor, ingrese un valor válido");
                cantidadAComprar = parseInt(prompt("Ingrese la cantidad que desea comprar del producto. Si desea volver al menú anterior, ingrese 0."));
            }
            
            if (cantidadAComprar === 0) break;
            
            let resultadoCompra = comprar(productoAComprar, cantidadAComprar);
            alert(resultadoCompra);
            accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));
            break;
        case 3:
            añadirProductosAlStock ();
            console.log(productos);
            accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));
            break;
        case 4:
            añadirProdctoPorPrompt();
            console.log(productos);
            accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));
            break;
        default: 
            alert("El valor ingresado no corresponde a ninguna acción, por favor ingrese un valor nuevo");
            accion = parseInt(prompt("1- Ver catálogo de productos. 2- Comprar un producto. 3- Añadir productos al stock. 4- Añadir un nuevo producto a la lista 0- Salir"));
    }
}







//! PRIMER PREENTREGA, CALCULADORA DE IMC

// Funciones y variables

// let peso = 0;
// let altura = 0;

// // Función para solicitar y validar el ingreso de peso y altura
// function calculadoraIMC () {
//     // Solicita el peso del usuario y valida que sea un número positivo
//     let peso = parseFloat(prompt("Ingrese su peso en kilogramos (ej: 70kg)"));

//     while (peso <=0 || isNaN(peso)) {
//         alert("Por favor, ingrese un valor válido para el peso");
//         peso = parseFloat(prompt("Ingrese su peso en kilogramos (ej: 70kg)"));
//     }
    
//     // Solicita la altura del usuario y valida que sea un número positivo
//     let altura = parseFloat(prompt("Ingrese su altura en metros (ej:1.70m)"));
    
//     while (altura <=0 || isNaN(altura)) {
//         alert("Por favor, ingrese un valor válido para la altura");
//         altura = parseFloat(prompt("Ingrese su altura en metros (ej:1.70m)"));
//     }
//     // Calcula el IMC basado en el peso y la altura
//     imc = (a, b) => a / (b * b) 
//     const resultadoIMC = imc (peso, altura) 
    
//     // Muestra el IMC calculado al usuario y una categoría basada en el valor del IMC
//     alert("Su índice de masa corporal es equivalente a " + resultadoIMC.toFixed(2));
    
//     if (resultadoIMC <= 16.00) {
//         alert ("Usted está severamente delgado");
//     } else if ((resultadoIMC > 16.00) && (resultadoIMC <= 17.00)){
//         alert ("Usted está moderadamente delgado");
//     } else if ((resultadoIMC > 17.00) && (resultadoIMC <= 18.50)) {
//         alert ("Usted está levemente delgado");
//     } else if ((resultadoIMC > 18.50) && (resultadoIMC <= 25.00)) {
//         alert ("Usted está en su peso ideal");
//     } else if ((resultadoIMC > 25.00) && (resultadoIMC <= 30.00)) {
//         alert ("Usted tiene sobrepeso");
//     } else if ((resultadoIMC > 30.00) && (resultadoIMC <= 35.00)) {
//         alert ("Usted tiene obesidad leve");
//     }else if ((resultadoIMC > 35.00) && (resultadoIMC <= 40.00)) {
//         alert ("Usted tiene obesidad moderada");
//     }else if (resultadoIMC > 40.00) {
//         alert ("Usted tiene obesidad mórbida");
//     }
    
//     alert("Muchas gracias por usar la calculadora de IMC, que tengas buen día.")
// }

// // Función para permitir al usuario repetir la calculadora
// function repetirCalculadora () {
//     let otra = prompt("Le gustaría volver a usar la calculadora? Escriba 'Si' o 'No'");
//     while (otra != "No") {
//         switch (otra) {
//             case "Si":
//                 calculadoraIMC ();
//                 break;
//             case "No":
//                 break;
//             default: alert ("Por favor, escriba 'Si' o 'No' para volver a usar la calculadora o finalizar el proceso");
//             break;
//         }
//         otra = prompt("¿Le gustaría volver a usar la calculadora? Escriba 'Si' o 'No'");
//     }
// }


// // -------- //


// // Inicio del programa
// alert("Bienvenido a la calculadora de Índice de Masa Corporal (IMC), por favor, ingrese sus datos:");

// calculadoraIMC ();
// repetirCalculadora();
// // -------- //


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



//TODO EJERCICIOS: (7/8)


/*
* 1) Crear una clase llamada Cancion que contenga los atributos: titulo y autor. Crear su
* constructor y tiene que poseer los siguientes métodos:
* a) mostrarTitulo() que muestre el título de la canción
* b) mostrarAutor() que muestre el autor de la canción
*/

// class Cancion {
//     constructor(titulo, autor) {
//         this.titulo = titulo;
//         this.autor =  autor;
//     }
//     mostrarTitulo = () => "Titulo: " + this.titulo;
//     mostrarAutor = () => "Autor: " + this.autor;
// }

// const cancion1 = new Cancion("Bajan", "Gustavo Cerati");
// const cancion2 = new Cancion("Mondongo", "Goku");

// console.log(cancion1.mostrarTitulo());
// console.log(cancion1.mostrarAutor()); 

// console.log(cancion2.mostrarTitulo());
// console.log(cancion2.mostrarAutor()); 



/*
* 2) Crear una clase llamada Persona que contenga los atributos: nombre, edad y DNI.
* Crear su constructor y tiene que poseer 2 métodos:
* a) mostrar() que muestre los datos de la persona
* b) esMayor() que devuelva un valor booleano si es mayor de edad o no
*/

// class Persona {
//     constructor(nombre, edad, DNI) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.DNI = DNI;
//     }
    
//     mostrarPersona = () => "La persona es " + this.nombre + " de " + this.edad + " años de edad y con DNI " + this.DNI;
//     esMayor = () => {if (this.edad >= 18) {
//         return "La persona es mayor de edad";
//     } else {
//         return "La persona es menor de edad";
//     }}
// }

// const persona1 = new Persona ("Pepe", 25, 12345678);
// const persona2 = new Persona ("Santi", 18, 5562710-8);

// console.log(persona1.mostrarPersona());
// console.log(persona1.esMayor());
// console.log(" ");
// console.log (persona2.mostrarPersona());
// console.log(persona2.esMayor());




/*
* 3) Crear una clase llamada Cuenta que contenga los siguientes atributos: titular (que
* es una persona) y cantidad (que pueden ser decimales). Crear su constructor y tiene
* que poseer los siguientes métodos:
* a) mostrar() que muestra los datos de la cuenta
* b) ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es
* negativa no se hace nada)
* c) retirar(cantidad) se retira una cantidad de la cuenta.
*/

// class Cuenta {
//     constructor (a, b) {
//         this.titular = a;
//         this.cantidad = b 
//     }
//     mostrar = () => "El titular de esta cuenta es " + this.titular + ". Su balance es de $" + this.cantidad;
//     ingresar = (cantidad) => {if (cantidad > 0) {
//         this.cantidad += cantidad;
//     }
//     return "Nuevo balance: $" + this.cantidad;
//     }
//     retirar = (cantidad) => {if (cantidad > this.cantidad) {
//         return "No puede retirar más de su balance. Balance actual: $" + this.cantidad;
//     }
//     this.cantidad -= cantidad;
//     return "Nuevo balance: $" + this.cantidad;}
// }

// const persona1 = new Cuenta ("Sebastian", 500);

// console.log(persona1.mostrar());
// console.log(persona1.ingresar(250));
// console.log(persona1.retirar(100));




/*
* 4) Crear una clase llamada Calculadora que contenga los siguientes atributos:
* numero1 y numero2. Crear su constructor y tiene que poseer los siguientes
* métodos:
* a) multiplicar() que multiplique los 2 números y devuelva su resultado
* b) sumar() que sume los 2 números y devuelva su resultado
* c) restar() que reste los 2 números y devuelva su resultado
* d) dividir() que divida los 2 números y devuelva su resultado
*/

// class Calculadora {
//     constructor (a, b) {
//         this.numero1 = a;
//         this.numero2 = b;
//     }
//     multiplicar = () => this.numero1 * this.numero2;
//     sumar = () => this.numero1 + this.numero2;
//     restar = () => this.numero1 - this.numero2;
//     dividir = () => this.numero1 / this.numero2;
// }

// let a = parseFloat(prompt("Ingrese su primer número"));
// let b = parseFloat(prompt("Ingrese su primer número"));

// let calculo = new Calculadora (a, b);

// console.log (calculo.multiplicar());
// console.log (calculo.sumar());
// console.log (calculo.restar());
// console.log (calculo.dividir());





/*
* 5) Crear una clase llamada Libro que contenga los siguientes atributos: título, autor y
* prestado (booleano). Crear su constructor y tiene que poseer los siguientes
* métodos:
* a) prestamo() que preste el libro (poner prestado en true). Si el libro se
* encuentra prestado, debe mostrar un alert informándolo
* b) devolver() que devuelva el libro (poner prestado en false). Si el libro no se
* encuentra prestado, debe mostrar un alert informándolo.
*/

// class Libro {
//     constructor (a, b, c = false) {
//         this.titulo = a;
//         this.autor = b;
//         this.prestado = c;
//     }
//     prestamo = () =>{if (this.prestado) {
//         alert ("El libro ya está prestado");
//         return "El libro ya está prestado";
//     } else {
//         this.prestado = true;
//         alert ("Usted ha pedido el libro " + this.titulo + " de " + this.autor + " prestado. Muchas gracias por confiar en nosotros");
//         return "El libro ha sido prestado exitosamente";
//     }
//     }
//     devolver = () => {
//         if (this.prestado) {
//             this.prestado = false
//             alert ("Muchas gracias por devolver " + this.titulo + " de " + this.autor);
//             return "El libro ha sido devuelto";
//         } else {
//             alert ("El libro ya se encuentra en nuestra posesión");
//             return "El libro ya se encuentra en nuestra posesión";
//         }
//     } 
// }

// const libro1 = new Libro ("1984", "George Orwell", false);

// console.log(libro1.prestamo());
// console.log(libro1.devolver());




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

// class Cafetera {
//     constructor (a, b) {
//         this.cantidadMaxima = a;
//         this.cantidadActual = b;
//     }
//     servirTaza = () => {
//         if (this.cantidadActual > 0) {
//             this.cantidadActual -= 1;
//             alert ("Taza servida, disfrute su café")
//             return "La cantidad actual es " + this.cantidadActual;
//         } else {
//             alert ("La cantidad actual es insuficiente para servir una taza")
//         }
//     }
//     vaciarCafetera = () =>{
//         this.cantidadActual = 0;
//         return "La cafetera ha sido vaciada, cantidad actual: " + this.cantidadActual;
//     } 
//     agregarCafe = (cantidad) => {
//         if (this.cantidadActual + cantidad <= this.cantidadMaxima) {
//             this.cantidadActual += cantidad;
//             return "la cantidad actual es " + this.cantidadActual;
//         } else {
//             alert("La cantidad que desea agregar supera la capacidad máxima de la cafetera")
//         }
//     }
//     llenarCafetera = () => {
//         if (this.cantidadActual == this.cantidadMaxima) {
//             alert("No se puede añadir más café a la máquina")
//         } else {
//             this.cantidadActual = this.cantidadMaxima;
//             return "La cafetera se ha llenado, cantidad actual: " + this.cantidadActual;
//         }
//     }
// }

// const cafetera1 = new Cafetera (50, 20);

// console.log(cafetera1.servirTaza());
// console.log(cafetera1.vaciarCafetera());
// console.log(cafetera1.agregarCafe(10));
// console.log(cafetera1.llenarCafetera());




/*
* 7) Crear un objeto Coche con las propiedades marca, modelo y año. Crea un método
* acelerar() que aumente la velocidad del coche en 10 km/h y un método frenar() que
* disminuya la velocidad del coche en 10 km/h.
*/

// class Coche {
//     constructor (a, b, c, d) {
//         this.marca = a;
//         this.modelo = b;
//         this.año = c;
//         this.velocidad = d;
//     }
//     acelerar = () => this.velocidad += 10
//     disminuir = () => this.velocidad -= 10
// }

// const coche1 = new Coche ("Geely", "Sheely", "2014", 50);

// console.log (coche1.acelerar());
// console.log (coche1.acelerar());
// console.log (coche1.acelerar());
// console.log (coche1.acelerar());

// console.log (coche1.disminuir());
// console.log (coche1.disminuir());
// console.log (coche1.disminuir());




/*
* 8) Crear un objeto Producto con las propiedades nombre, precio y stock. Crea un
* método vender() que reduce el stock del producto en 1 unidad.
*/

//! //////////////////





//! CLASE 6, ARRAYS

//TODO EJEMPLOS:


/*
? RECORRER UN ARRAY
*/

// const nombresDeProductos = [
//     'Yogurt',
//     'Leche',
//     'Manteca',
//     'Lechuga',
//     'Tomate',
//     'Papa',
// ];

// for(let i = 0; i < nombresDeProductos.length; i++) {
//     console.log(nombresDeProductos[i]);
// }



/*
? AGREGAR ELEMENTOS A LA LISTA
*/

// const nombres = ["Juan", "Pedro"];

//* Forma 1
// nombres.push("Mariano");
// nombres.push("Pepe");
//console.log (nombres)

//* Forma 2 - Varios elementos a la vez
// nombres.push("Mariano", "Pepe");
// nombres.unshift("Andres");
// console.log(nombres);



/*
? ELIMINAR ELEMENTOS DEL ARRAY
*/

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
// ];
// console.log(productos);

// // Elimina al final
// productos.pop();
// console.log(productos);

// // Elimina al principio
// productos.shift();
// console.log(productos);


//* SPLICE

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
//     'Jabon',
// ];

// // Eliminar elementos del medio
// productos.splice(1, 3);

// // Eliminar desde el índice en adelante
// productos.splice(2);

// // Eliminar los 2 primeros elementos
// productos.splice(0, 2);

// // Esto no elimina nada
// productos.splice(1, 0);

// // El método splice me devuelve un nuevo array con los elementos eliminados
// const eliminados = productos.splice(1, 2);

// console.log(productos);




//TODO EJERCICIOS: (7/9)


/*
* 1) Escribir un programa en donde el usuario ingrese números, esos números se
* carguen en un array. Luego recorrer el array y determinar cuál es el mayor, el menor
* y la media.
*/

// let numeros = []; // Array para almacenar los números ingresados
// let input;

// while (true) {
//     input = prompt("Ingrese un número o escriba 'Salir' para terminar:");

//     if (input.toLowerCase() === "salir") {
//         break; // Si el usuario escribe 'Salir', el ciclo se detiene
//     }

    // let numero = parseFloat(input);

    // if (!isNaN(numero)) {
    //     numeros.push(numero); // Agrega el número al array si es válido
    // } else {
    //     alert("Por favor, ingrese un número válido."); // Si no es un número válido, muestra una alerta
    // }
// }


// console.log(numeros); // Muestra el array con los números ingresados




/*
* 2) Escribir un programa en donde el usuario ingrese no más de 10 números, luego
* calcular la media de los números ingresados
*/

// let numerosArray = [];
// let input;
// let contador = 0;

// while (contador <= 10) {
//     input = prompt("Ingrese un número o escriba 'Salir' para terminar:");
//     contador++;
//     if (input.toLowerCase() === "salir") {
//         break;
//     }
//     let numero = parseFloat(input);

//     if (!isNaN(numero)) {
//         numerosArray.push(numero);
//     } else {
//         alert("Por favor, ingrese un número válido.");
//     }
// }

// console.log(numerosArray);

// if (numerosArray.length > 0) {  // Asegurarse de que hay números en el array
//     let suma = 0;

//     for (let i = 0; i < numerosArray.length; i++) {
//         suma += numerosArray[i]; // Sumar todos los números del array
//     }

//     let promedio = suma / numerosArray.length; // Calcular el promedio
//     console.log("La media de los números ingresados es: " + promedio);
// } else {
//     console.log("No se ingresaron números válidos.");
// }




/*
* 3) Dados los siguientes arrays
* a) [1, 3, 5, 6, 7, 9]
* b) [1, 2, 3, 4, 7, 8]
* Generar un nuevo array con la intersección de los elementos
*/

// let a = [1, 3, 5, 6, 7, 9];
// let b = [1, 2, 3, 4, 7, 8];

// let interseccion = a.filter(num => b.includes(num));

// console.log("Intersección:", interseccion);




/*
* 4) Ídem ejercicio anterior pero en vez de la intersección, generar un nuevo array con la
* unión de los elementos (Sin repetirlos).
*/

// let a = [1, 3, 5, 6, 7, 9];
// let b = [1, 2, 3, 4, 7, 8];
// let c = []

// // Añadimos los elementos de 'a' a 'c'
// for (let i = 0; i < a.length; i++) {
//     if (!c.includes(a[i])) { // Verificamos que no esté ya en 'c'
//         c.push(a[i]);
//     }
// }

// // Añadimos los elementos de 'b' a 'c' si no están ya en 'c'
// for (let i = 0; i < b.length; i++) {
//     if (!c.includes(b[i])) { // Verificamos que no esté ya en 'c'
//         c.push(b[i]);
//     }
// }
// console.log(c);

//!     IMPORTANTE 

/*
* En "(!c.includes(a[i]))" el está diciendo que si NO(!) está incluido en
* el array "c" (c.includes), entonces el VALOR en el índice "i (del ciclo)"
* del array "a" (a[i]), entonces se pushea el número.
*/




/*
* 5) Solicitarle al usuario un número N. Luego, generar un array de N cantidad de
* elementos, donde los elementos tienen que ser múltiplos de N.
* Nota: N tiene que ser mayor a 0 y menor a 100
*/

// let numero = parseInt(prompt("Ingrese un numero entero entre 1 y 99"));

// while (numero < 1 || numero > 99 || isNaN(numero)){
//     alert ("El número ingresado es inválido, por favor, ingrese un número nuevo");
//     numero = parseInt(prompt("Ingrese un numero entero entre 1 y 99"));
// }

// let numeroArray = [];

// for (let i = 0; i <= numero; i++) {
//     numeroArray.push([i] * numero);
// }

// console.log(numeroArray);




/*
* 6) Escriba una función que sume todos los elementos de un array de números. Ej: Si se
* le da el array [3, 5, 8, 1] tiene que devolver 17.
*/

// let arrayNumeros = [3, 5, 8, 1];
// let contador1 = 0

// for (let i = 0; i < arrayNumeros.length; i++) {
//     contador1 += arrayNumeros[i]
// }

// console.log(contador1);


//* Con input humano

// let arrayNumeros2 = [];
// let contador2 = 0;


// let numeros = prompt("Ingrese sus números");

// while (numeros.toLowerCase() !== "salir") {
//     if (isNaN(numeros) || numeros === null || numeros.trim() === ""){
//         alert ("El número ingresado es inválido, por favor, ingrese un número nuevo");
//         numeros = prompt("Ingrese sus números");
//     } else {
//         arrayNumeros2.push(parseFloat(numeros));
//         numeros = prompt("Ingrese sus números");
//     } 
// }
// console.log(arrayNumeros2)

// for (let i = 0; i < arrayNumeros2.length; i++) {
//     contador2 += arrayNumeros2[i];
// }

// console.log(contador2);




/*
* 7) Escriba una función que tome un array de números y devuelva un nuevo array solo
* con los números pares. Ej: Si se le da el array [1, 3, 4, 6, 8, 9] tiene que devolver el
* array [4, 6, 8]
*/

// let numerosArray = [1, 3, 4, 6, 8, 9];
// let numerosArray2 = []

// for (let i = 0; i < numerosArray.length; i++) {
//     if (numerosArray[i] % 2 == 0) {
//         numerosArray2.push(numerosArray[i]);
//     }
// }

// console.log(numerosArray2);



//* Con input humano 

// let numerosArray = []
// let numerosArrayPares = []

// let numeros = prompt("Ingrese un número");

// while (numeros.toLowerCase() !== "salir") {
//     if (isNaN(numeros) || numeros === null || numeros.trim() === ""){
//         alert ("El número ingresado es inválido, por favor, ingrese un número nuevo");
//         numeros = prompt("Ingrese sus números");
//     } else {
//         numerosArray.push(parseInt(numeros));
//         numeros = prompt("Ingrese sus números");
//     }
// }

// console.log(numerosArray);

// for (let i = 0; i < numerosArray.length; i++) {
//     if (numerosArray[i] % 2 == 0) {
//         numerosArrayPares.push(numerosArray[i]);
//     }
// }

// console.log(numerosArrayPares);




/*
* 8) Dado el siguiente array:
* a) [2, 7, 6, 8, 3, 2, 3, 4, 7, 5, 6]
* Generar un nuevo array en dónde se eliminen los elementos repetidos, por lo
* que el resultado sería: [2, 7, 6, 8, 3, 4, 5]
*/






/*
* 9) Escriba una función que tome un array de números y un número, y devuelva un
* nuevo array donde cada elemento se multiplica por ese número. Ej: Se le da el array
* [2, 4, 5, 6] y se envía el número 3, por lo que el array resultante tiene que ser: [6, 12,
* 15, 18]
*/

//! //////////////////





//! CLASE 7, FUNCIONES DE ORDEN SUPERIOR

//TODO EJEMPLOS:

//* FUNCIÓN DE ÓRDEN SUPERIOR

// function mayorQue (numeroAComparar) {
//     return function(numero) {
//         return numero > numeroAComparar;
//     }
// }

// const mayorQueDiez = mayorQue(10);
// /*
// function(numero) {
//     return numero > 10;
// }
// */


// const mayorQueVeinte = mayorQue(20);
// /*
// function(numero) {
//     return numero > 20;
// }
// */


// const mayorQueQuince = mayorQue(15);
// /*
// function(numero) {
//     return numero > 15;
// }
// */


// const mayorQueTreinta = mayorQue(30);
// /*
// function(numero) {
//     return numero > 30;
// }
// */



// // INICIO DEL PROGRAMA

// console.log(mayorQueDiez(20));
// console.log(mayorQueVeinte(20));
// console.log(mayorQueQuince(20));



/*
* FUNCIONES QUE RECIBAN OTRA FUNCIÓN COMO PARAMÉTRO
*/

// function porCadaUno (arr, funcion) {
//     for(const elemento of arr) {
//         funcion(elemento);
//     }
// }

// const numeros = [1, 2, 3, 4, 5];

// porCadaUno(numeros, function (el) {
//     console.log(el * 2);
// });

// porCadaUno(numeros, function (el) {
//     console.log("Se está recorriendo el elemento: " + el);
// });



/*
* FUNCIONES DE ÓRDEN SUPERIOR
*/

//? FOR EACH

// const personas = [
//     {
//         nombre: "Pepe",
//         edad: 15,
//         profesion: "Plomero",
//     },
//     {
//         nombre: "Juan",
//         edad: 25,
//         profesion: "Gasista",
//     },
//     {
//         nombre: "Pedro",
//         edad: 20,
//         profesion: "Electricista",
//     },
//     {
//         nombre: "Juan",
//         edad: 45,
//         profesion: "Barrendero",
//     },
// ];

// personas.forEach( (el) => {
//      console.log("El nombre es: " + el.nombre);
// });

//? FIND

// const juan = personas.find( (el) => {
//     return el.nombre === "Juan";
// });

//? FILTER

// const juanes = personas.filter( (el) => {
//     return el.nombre === "Juan";
// });

//? SOME

// const existePepe = personas.some( (el) => {
//     return el.nombre === "qwjkeqwjkeqwkjeqwjk";
// });

//? MAP

// const edades = personas.map( (el) => {
//     return el.edad;
// });

// const personasSinEdad = personas.map( (el) => {
//     return {
//         nombre: el.nombre,
//         profesion: el.profesion,
//     }
// });
//
// console.log(personasSinEdad);

//? REDUCE

// const carrito = [
//     {
//         nombre: "Yogurt",
//         precio: 15,
//         cantidad: 2,
//     },
//     {
//         nombre: "Pepino",
//         precio: 20,
//         cantidad: 4,
//     },
//     {
//         nombre: "Leche",
//         precio: 25,
//         cantidad: 3,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 20,
//         cantidad: 1,
//     },
//     {
//         nombre: "laurel",
//         precio: 40,
//         cantidad: 2,
//     },
// ];

// const subtotal = carrito.reduce( (acc, el) => {
//     return acc + (el.precio * el.cantidad);
// }, 0);

// console.log(subtotal);

//? SORT

//* ORDENAR POR PRECIO
// carrito.sort( (a, b) => {
//     if(a.precio > b.precio) {
//         return 1;
//     } else if(a.precio < b.precio) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

//* ORDENAR POR NOMBRE
// carrito.sort( (a, b) => {
//     if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
//         return 1;
//     } else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(carrito);






//! EJERCICIOS EXTRA DE CHATGPT

// // Función map() 

// const numeros1 = [1, 2, 3, 4, 5];
// const dobles = numeros1.map(function(num) {
//     return num * 2;
// });
// console.log(dobles);  // [2, 4, 6, 8, 10]


// // Función filter

// const numeros2 = [1, 2, 3, 4, 5, 6];
// const pares = numeros2.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(pares);  // [2, 4, 6]


// // Función reduce ()

// const numeros3 = [1, 2, 3, 4, 5];
// const suma = numeros3.reduce(function(acumulador, actual) {
//     return acumulador + actual;
// }, 0);
// console.log(suma);  // 15


// // Función toUpperCase()

// const palabras = ['hola', 'mundo', 'javascript'];
// const mayusculas = palabras.map(function(palabra) {
//     return palabra.toUpperCase();
// });
// console.log(mayusculas);  // ['HOLA', 'MUNDO', 'JAVASCRIPT']



// /*
// * EJERCICIOS DE CHATGPT
// */

// /*
// * 1) Convertir grados Celsius a Fahrenheit:
// * Tienes un array de temperaturas en grados Celsius. Usa map para convertirlas a Fahrenheit.
// * Fórmula: F = C * 9/5 + 32.
// * Instrucciones:

// * Crea un array con algunas temperaturas en Celsius.
// * Usa map para convertirlas a Fahrenheit.
// * Muestra el array resultante por consola.
// */

// const arrayTemperaturas = [50, 20, 11, 3, 41];
// const conversion = arrayTemperaturas.map(function(temp) {
//     return temp * 9/5 + 32;
// })
// console.log(conversion);



// /*
// * 2) Filtrar palabras con más de 5 caracteres:
// * Tienes un array de palabras. Usa filter para quedarte solo con las palabras que tengan más de 5 caracteres.
// * Instrucciones:
// * 
// * Crea un array con algunas palabras.
// * Usa filter para obtener las palabras largas.
// * Muestra el nuevo array por consola.
// */

// const arrPalabras = ['hola', 'mundo', 'javascript', `mondongo`, `papa`, `css`, `boniato`, `estreptococo`];
// const filtrado = arrPalabras.filter(function (palabra) {
//     return palabra.length > 5
// })
// console.log(filtrado);


// /*
// * 3) Suma los números impares de un array:
// * Usa reduce para sumar solo los números impares de un array.
// * Instrucciones:

// * Crea un array con algunos números.
// * Usa filter para obtener los números impares.
// * Usa reduce para sumar esos números.
// * Muestra el resultado por consola.
// */

// //* salió mal
// const arrImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const sumaImpares = arrImpares.reduce(function (acumulador, valorActual) {
//     if (valorActual % 2 !== 0) {
//         return valorActual + acumulador;
//     }
// }, 0);
// console.log(sumaImpares);







//TODO EJERCICIOS: (0/8)



/*
* 1) Dado el siguiente array de arrays, se pide transformarlo para que de como
* resultado un único array con todos los elementos. Para ese ejemplo, el array
* resultante sería: [1, 2, 3, 4, 5, 6, 7, 8, 9].
* const listaNumeros = [
*    [1, 2, 3],
*    [4, 5, 6],
*    [7, 8, 9],
* ];
*/

// const listaNumeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// let numerosArray = []

// const x = listaNumeros.map((arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         numerosArray.push(arr[i]);
//     }
// });
// console.log(numerosArray);

// ! Hecho con ayuda




/*
* 2) Dado el siguiente array
* a. Se pide primero obtener todas las personas del género femenino (genero = “F”)
* b. Una vez obtenidas, se pide calcular el promedio de edad sobre ellas
* const listaPersonas = [
*    { nombre: "Matias", genero: "M", edad: 25 },
*    { nombre: "Fernanda", genero: "F", edad: 27 },
*    { nombre: "Federico", genero: "M", edad: 32 },
*    { nombre: "Camila", genero: "F", edad: 12 },
*    { nombre: "Gabriela", genero: "F", edad: 42 },
* ];
*/

// const listaPersonas = [
//     { nombre: "Matias", genero: "M", edad: 25 },
//     { nombre: "Fernanda", genero: "F", edad: 27 },
//     { nombre: "Federico", genero: "M", edad: 32 },
//     { nombre: "Camila", genero: "F", edad: 12 },
//     { nombre: "Gabriela", genero: "F", edad: 42 },
// ];


// const mujeres = listaPersonas.filter(function(persona) {
//     return persona.genero === "F"
// });
// console.log("Personas del género femenino:", mujeres);



// const promedioEdad = mujeres.reduce(function(total, persona) {
//     return total + persona.edad;
// }, 0) / mujeres.length;

// console.log("Promedio de edad de las mujeres:", promedioEdad);

// ! Hecho con ayuda




/* 
* 3)*  Dado el siguiente array de letras, se pide obtener cuantas veces se repite
* cada letra. Para este ejemplo sería:
* a: 3
* b: 2
* c: 1
* d: 1
* f: 1
* g: 2
* const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'f', 'g', 'a']
*/




//! Esto es otra cosa, sin relación directa. Explica cómo usar el método filter() con todos sus parámetros
//? filter(letra, posicion, letras) ===> 
    //? letra = Valor literal (en este caso, la letra en sí)
    //? posicion = El indice en el que se encuentra la letra (a, indice 0. b, indice 1, etc)
    //? letras = El NOMBRE DEL ARRAY sobre el que está siendo aplicado el filter

// const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'f', 'g', 'a'];

// const numerosUnicos = letras.filter ((letra, posicion, letras) => posicion === letras.indexOf(letra));
// console.log(numerosUnicos)




/*
* 4) Se solicita obtener la sumatoria solamente de los números positivos.
* const numeros = [1, -4, 12, 0, -3, 29, -150];
*/

// const numeros = [1, -4, 12, 0, -3, 29, -150];

// const esPositivo = numero => numero >= 0;
// const numerosPositivos = numeros.filter(esPositivo);
// console.log(numerosPositivos);

// let resultado = 0
// for (let i = 0; i < numerosPositivos.length; i++) {
//     resultado += numerosPositivos[i];
// }
// console.log(resultado)


//! Con función flecha

// const numeros = [1, -4, 12, 0, -3, 29, -150];

// const numerosPositivos1 = numeros.filter(numero => numero >= 0)
// console.log(numerosPositivos1);

// let resultado1 = 0
// for (let i = 0; i < numerosPositivos.length; i++) {
//     resultado += numerosPositivos[i];
// }
// console.log(resultado1)




/*
* 5) Dado el siguiente array, se solicita aumentar los precios de todos los
* productos en un 15%
* const productos = [
*    {
*       nombre: "arroz",   
*       precio: 20,
*    },
*    {
*       nombre: "Fideos",
*       recio: 15,
*    },
*    {
*       nombre: "Tomate",
*       precio: 5,
*    }
* ];
*/

// const productos = [
// {
//     nombre: "arroz",   
//     precio: 20,
// },
// {
//     nombre: "Fideos",
//     precio: 15,
// },
// {
//     nombre: "Tomate",
//     precio: 5,
// }
// ];

// const aumento = productos.map(
//     function (producto) {
//         return producto.precio * 1.15;
//     }
// );
// console.log(aumento);


// //! Con función flecha

// const aumento1 = productos.map(producto => producto.precio * 1.15);
// console.log(aumento1);




/*
* 6) Dado el siguiente array se pide obtener.
* a. La población total de Argentina y la población total de España
* b. Las provincias de Argentina que tienen más de 1500 habitantes
* c. Las provincias de España que tienen más de 4000 habitantes
* d. Cuál es la provincia de Argentina que tiene más población
* e. Cuál es la provincia de España que tiene más población
* const poblaciones = [
*  {
*   pais: "Argentina",
*   provincia: "Buenos Aires",
*   poblacion: 2000,
*  },
*  {
*   pais: "España",
*   provincia: "Cataluña",
*   poblacion: 5000,
*  },
*  {
*   pais: "España",
*   provincia: "Valencia",
*   poblacion: 2500,
*  },
*  {
*   pais: "Argentina",
*   provincia: "Santa Fe",
*   poblacion: 1000,
*  },
*  {
*   pais: "España",
*   provincia: "Madrid",
*   poblacion: 3000,
*  },
*  {
*   pais: "Argentina",
*   provincia: "Córdoba",
*   poblacion: 3500,
*  }
* ]
*/

// const poblaciones = [
//     {
//     pais: "Argentina",
//     provincia: "Buenos Aires",
//     poblacion: 2000,
//     },
//     {
//     pais: "España",
//     provincia: "Cataluña",
//     poblacion: 5000,
//     },
//     {
//     pais: "España",
//     provincia: "Valencia",
//     poblacion: 2500,
//     },
//     {
//     pais: "Argentina",
//     provincia: "Santa Fe",
//     poblacion: 1000,
//     },
//     {
//     pais: "España",
//     provincia: "Madrid",
//     poblacion: 3000,
//     },
//     {
//     pais: "Argentina",
//     provincia: "Córdoba",
//     poblacion: 3500,
//     }
// ];

/*
* PARTE A) La población total de Argentina y la población total de España.
*/

// Paises ARG
// const esArg = poblaciones.filter(function (estePais) {
//     if (estePais.pais == "Argentina") {
//         return estePais;
//     }
// });
// console.log(esArg);

//* Total poblacion ARG
// const poblacionArg = esArg.reduce(function (total, estaPoblacion) {
//     return total + estaPoblacion.poblacion;
// }, 0);
// console.log(poblacionArg);


// Paises ESP
// const esEsp = poblaciones.filter(function (estePais) {
//     if (estePais.pais == "España") {
//         return estePais;
//     }
// });
// console.log(esEsp);

//* Total poblacion ESP
// const poblacionEsp = esEsp.reduce(function (acumulador, estaPoblacion) {
//     return acumulador + estaPoblacion.poblacion;
// }, 0);
// console.log(poblacionEsp);



/*
* PARTE B) Las provincias de Argentina que tienen más de 1500 habitantes.
*/

// const mas1500HabitantesArg = esArg.filter(function (provincia) {
//     if (provincia.poblacion > 1500) {
//         return provincia;
//     }
// });
// console.log(mas1500HabitantesArg);



/*
* PARTE C) Las provincias de España que tienen más de 4000 habitantes
*/

// const mas4000HabitantesEsp = esEsp.filter(function (provincia) {
//     if (provincia.poblacion > 4000) {
//         return provincia;
//     }
// });
// console.log(mas4000HabitantesEsp);



/*
* PARTE D) Cuál es la provincia de Argentina que tiene más población
*/





/*
* PARTE E) Cuál es la provincia de España que tiene más población
*/






/*
* 7) Dado el siguiente array, obtenga un nuevo array con las palabras que tienen 5 o más caracteres:
* const palabras = ['casa', 'perro', 'gato', 'elefante', 'ratón]
*/






/*
* 8) Dado el siguiente array, escriba una función que reciba un array y un atributo
* y ordene el array por ese atributo:
* const personas = [
* { nombre: 'Juan', apellido: "Fernandez", edad: 30 },
* { nombre: 'María', apellido: "Gomez", edad: 25 },
* { nombre: 'Pedro', apellido: "Rodriguez", edad: 35 },
* { nombre: 'Tomas', apellido: "Ramirez", edad: 20 },
* { nombre: 'Matias', apellido: "Mendez", edad: 40 },
* ];
* const personasOrdenadasPorEdad = ordenarPorPropiedad(personas
* console.log(personasOrdenadasPorEdad); // El array de objetos
*/


// const personas = [          
//     { nombre: 'Juan', apellido: "Fernandez", edad: 30 },
//     { nombre: 'María', apellido: "Gomez", edad: 25 },
//     { nombre: 'Pedro', apellido: "Rodriguez", edad: 35 },
//     { nombre: 'Tomas', apellido: "Ramirez", edad: 20 },
//     { nombre: 'Matias', apellido: "Mendez", edad: 40 },
// ];

// function ordenarPorPropiedad (array, nombreDeLaPropiedad) {
//     array.sort((a, b) => {
//         if (a[nombreDeLaPropiedad] > b[nombreDeLaPropiedad]) {
//             return 1;
//         } else if (a[nombreDeLaPropiedad] < b[nombreDeLaPropiedad]) {
//             return -1
//         } else {
//             return 0
//         }
//     });
//     return array;
// }

// const ordenarPorEdad = ordenarPorPropiedad (personas, "edad");
// console.log(ordenarPorEdad);

//! //////////////////





//! CLASE X, 

//TODO EJEMPLOS:



//TODO EJERCICIOS: (x/x)


