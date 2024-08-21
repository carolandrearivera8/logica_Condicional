//Ejercicio 1:
//const edad = prompt("Por favor, ingresa tu edad:");
//const edadNumerica = parseInt(edad, 10);

//if (edadNumerica >= 18) {
   //alert("Eres mayor de edad");
//} else {
    //alert("Eres menor de edad");
//}

//Ejercicio 2:
const numero = prompt("Por favor, ingresa un número:");
const numeroNumerico = parseFloat(numero);

if (isNaN(numeroNumerico)) {
    alert("Por favor, ingresa un valor numérico válido.");
} else if (numeroNumerico >= 0) {
    alert("El número es positivo");
} else {
    alert("El número es negativo");
}

//Ejercicio 3:
const número = prompt("Por favor, ingresa un número:");
const númeroNumerico = parseInt(número, 10);

if (isNaN(númeroNumerico)) {
    console.log("Por favor, ingresa un valor numérico válido.");
} else {
    if (númeroNumerico % 4 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//Ejercicio 4:
const totalCompra = parseFloat(prompt("Por favor, ingresa el total de la compra:"));
if (isNaN(totalCompra) || totalCompra < 3) {
    console.log("Por favor, ingresa un valor numérico válido para el total de la compra.");
} else {
    let totalFinal;

    if (totalCompra > 100) {
        totalFinal = totalCompra * 0.9;
        console.log(`El total con descuento es: ${totalFinal.toFixed(2)}`);
    } else {
        totalFinal = totalCompra;
        console.log(`El total sin descuento es: ${totalFinal.toFixed(2)}`);
    }
}

//Ejercicio 5:
const numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
const numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingresa valores numéricos válidos.");
} else {
    if (numero1 > numero2) {
        console.log(`El primer número (${numero1}) es mayor que el segundo número (${numero2}).`);
    } else if (numero1 < numero2) {
        console.log(`El segundo número (${numero2}) es mayor que el primer número (${numero1}).`);
    } else {
        console.log(`Ambos números (${numero1} y ${numero2}) son iguales.`);
    }
}

//Ejercicio 6:
let edad = prompt("Por favor, ingresa tu edad:");
edad = parseInt(edad);

if (edad < 12) {
    alert("Eres un niño.");
} else if (edad >= 12 && edad <= 17) {
    alert("Eres un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    alert("Eres un adulto.");
} else {
    alert("Eres un adulto mayor.");
}

//Ejercicio 7:
let nota = prompt("Por favor, ingresa una nota entre 0 y 100:");
nota = parseInt(nota);

if (nota >= 90) {
    alert("Excelente");
} else if (nota >= 70) {
    alert("Bueno");
} else if (nota >= 50) {
    alert("Regular");
} else if (nota < 50) {
    alert("Insuficiente");
}

//Ejercicio 8:
let opcion = prompt("Elige una opción de menú: 1 para Pizza, 2 para Hamburguesa, 3 para Tacos:");
opcion = parseInt(opcion);

switch(opcion) {
    case 1:
        alert("Has seleccionado Pizza.");
        break;
    case 2:
        alert("Has seleccionado Hamburguesa.");
        break;
    case 3:
        alert("Has seleccionado Tacos.");
        break;
    default:
        alert("Opción no válida.");
        break;
}

//Ejercicio 9:
let lado1 = parseFloat(prompt("Ingresa el primer lado del triángulo:"));
let lado2 = parseFloat(prompt("Ingresa el segundo lado del triángulo:"));
let lado3 = parseFloat(prompt("Ingresa el tercer lado del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
    alert("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("El triángulo es isósceles.");
} else {
    alert("El triángulo es escaleno.");
}

//Ejercicio 10:
let numeroCorrecto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 10:"));

if (numeroUsuario === numeroCorrecto) {
    alert("¡Has acertado!");
} else {
    alert("Intenta de nuevo. El número correcto era " + numeroCorrecto);
}

//Ejercicio 11:
let precioBase = parseFloat(prompt("Ingresa el precio base del producto:"));
let descuento = 0;

if (precioBase > 500) {
    descuento = 0.15; // 15% de descuento
} else if (precioBase >= 300 && precioBase <= 500) {
    descuento = 0.10; // 10% de descuento
} else {
    descuento = 0.05; // 5% de descuento
}
let precioFinal = precioBase - (precioBase * descuento);
alert("El precio final después del descuento es: $" + precioFinal.toFixed(2));

//Ejercicio 12:
let anio = parseInt(prompt("Ingresa un año:"));

if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + " no es un año bisiesto.");
}

//Ejercicio 13:
let usuario = prompt("Ingresa tu nombre de usuario:");
let contrasena = prompt("Ingresa tu contraseña:");

if (usuario === "admin" && contrasena === "1234") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}

//Ejercicio 14:
let hora = parseInt(prompt("Ingresa la hora (0 a 23):"));

if (hora >= 6 && hora < 12) {
    alert("Buenos días");
} else if (hora >= 12 && hora < 18) {
    alert("Buenas tardes");
} else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)) {
    alert("Buenas noches");
} else {
    alert("Hora no válida. Por favor, ingresa un número entre 0 y 23.");
}

//Ejercicio 15:
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
let peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));
let altura = parseFloat(prompt("Ingrese su altura en metros (m):"));

let imc = calcularIMC(peso, altura);
let clasificacion = clasificarIMC(imc);
alert("Tu IMC es " + imc.toFixed(2) + " y corresponde a la categoría: " + clasificacion);
