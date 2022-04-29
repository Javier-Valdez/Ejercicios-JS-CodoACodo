/* 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”. */

//alert("Hola Mundo!");


/* 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write). */

//document.write("<p>Hello world!</p>");


/* 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5. */

//document.write("La suma de 3 + 5 es ", 3+5);


/* 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario” */

/* let nombreUsuario = prompt("Ingresa tu nombre");
document.write("Hola, ", nombreUsuario); */


/* 5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números. */

/* let valor1 = Number(prompt("Ingresa el primer numero que quieres sumar"));
let valor2 = Number(prompt("Ingresa el segundo numero que quieres sumar"));
document.write("La suma de ", valor1, "+", valor2, " Es igual a ", valor1 + valor2); */


/* 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor. */

/* let numero1 = Number(prompt("Ingresa el primer numero"));
let numero2 = Number(prompt("Ingresa el segundo numero"));
document.write(`El numero mayor entre ${numero1} y ${numero2} es ${Math.max(numero1, numero2)}.`); */


/* 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres. */

/* let numero1 = Number(prompt("Ingresa el primer numero"));
let numero2 = Number(prompt("Ingresa el segundo numero"));
let numero3 = Number(prompt("Ingresa el tercer numero"));
document.write(`El numero mayor entre ${numero1}, ${numero2} y ${numero3} es ${Math.max(numero1, numero2, numero3)}.`); */


/* 8. Escribe un programa que pida un número y diga si es divisible por 2 */

/* let numero = Number(prompt("Ingresa un numero"));

if (numero % 2 === 0){
    console.log(`El numero ${numero} es divisible por 2`)
} 

else {
    console.log(`El numero ${numero} no es divisible por 2`)
}; */


/* 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a */

/* let frase = prompt("Escribe una frase");
let letraBuscada = "a"
let contador = 0;
for (let i=0; i < frase.length; i++){
    if (frase[i].toLocaleLowerCase() === letraBuscada){
        contador += 1;
    }
}
console.log(`La frase "${frase}" contiene ${contador} veces la letra ${letraBuscada}.`)
 */

/* 10. Escribe un programa que pida una frase y escriba las vocales que aparecen */

/* let frase = prompt("Escribe una frase...");

if (frase.toLowerCase().includes("a")){
    console.log("La frase contiene la vocal 'a'");
}
if (frase.toLowerCase().includes("e")){
    console.log("La frase contiene la vocal 'e'");
}
if (frase.toLowerCase().includes("i")){
    console.log("La frase contiene la vocal 'i'");
}
if (frase.toLowerCase().includes("o")){
    console.log("La frase contiene la vocal 'o'");
}
if (frase.toLowerCase().includes("u")){
    console.log("La frase contiene la vocal 'u'");
} */




/* 11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales */

/* let frase = prompt("Escribe una frase...");
let contador = 0;

for (let i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() == "a" || frase[i].toLowerCase() == "e" || frase[i].toLowerCase() == "i" || frase[i].toLowerCase() == "o" || frase[i].toLowerCase() == "u"){
        contador += 1;
    } 
}
console.log(`La frase "${frase}" contiene ${contador} vocales`); */


/* 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales */

/* let frase = prompt("Escribe una frase...");
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() == "a"){
        contadorA += 1;
    }
    if (frase[i].toLowerCase() == "e"){
        contadorE +=1;
    }
    if (frase[i].toLowerCase() == "i"){
        contadorI += 1;
    }
    if (frase[i].toLowerCase() == "o"){
        contadorO += 1;
    }
    if (frase[i].toLowerCase() == "u"){
        contadorU += 1;
    }
}
console.log(`La frase "${frase}" contiene ${contadorA} "a", ${contadorE} "e", ${contadorI} "i", ${contadorO} "o", y ${contadorU} "u".`); */


/* 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro) */

/* let numero = Number(prompt("Ingresa un numero..."));

if (numero % 2 === 0) {
    console.log(`El numero ${numero} es divisible por 2`);
} else if (numero % 3 === 0){
    console.log(`El numero ${numero} es divisible por 3`);
} else if (numero % 5 === 0){
    console.log(`El numero ${numero} es divisible por 5`);
} else if (numero % 7 === 0){
    console.log(`El numero ${numero} es divisible por 7`);
} else {
    console.log(`El numero ${numero} no es divisible por 2, 3, 5 ni 7`)
} */


/* 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible) */

/* let numero = Number(prompt("Ingresa un numero..."));

if (numero % 2 === 0) {
    console.log(`El numero ${numero} es divisible por 2`);
} 
if (numero % 3 === 0){
    console.log(`El numero ${numero} es divisible por 3`);
} 
if (numero % 5 === 0){
    console.log(`El numero ${numero} es divisible por 5`);
} 
if (numero % 7 === 0){
    console.log(`El numero ${numero} es divisible por 7`);
} 
if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
    console.log(`El numero ${numero} no es divisible por 2, 3, 5 ni 7`)
} */

/* 15. Escribir un programa que escriba en pantalla los divisores de un número dado */

/* let numero = Number(prompt("Ingresa un numero..."));

for (let i=numero; i>1; i--){
    if (numero % i === 0){
        console.log(`${i} es un divisor valido para ${numero}`);
    }
} */

/* 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados */

/*  let numero1 = Number(prompt("Ingresa un primer numero..."));
let numero2 = Number(prompt("Ingresa un segundo numero..."));
let contador = 0;


for (let i = Math.min(numero1, numero2); i > 1; i--){
    if (numero1 % i === 0 && numero2 % i === 0){
        document.write(`<p>${i} es un divisor valido para ${numero1} y ${numero2}</p>`);
        contador += 1;
    }        
}
if (contador === 0){
        document.write(`<p>No existe ningun divisor comun para ${numero1} y ${numero2}</p>`);
}
 */



/* 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad) */

/* let numero = Number(prompt("Ingresa un numero..."));
let esPrimo = true;

for (let i = 2; i < numero - 1; i++){
    if (numero % i === 0){
        esPrimo = false;
    }
}

console.log(esPrimo === true ? `${numero} es un numero primo.` : `${numero} no es un numero primo.`); */


/* 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir */

/* let edad = Number(prompt("Ingresa tu edad..."));

console.log(edad >= 18 ? "Ya puedes conducir" : "Aun no tienes edad suficiente para conducir"); */


/* 19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */

/* let nota = Number(prompt("Ingresa tu nota del 0 al 10"));
let calificación; 

if (nota <= 3){
    console.log("Muy deficiente");
} 
else if (nota > 3 && nota <= 5){
    console.log("Insuficiente");
}
else if (nota === 6){
    console.log("Suficiente");
}
else if (nota === 7){
    console.log("Bien");
}
else if (nota > 7 && nota <= 9){
    console.log("Notable");
}
else if (nota === 10){
    console.log("Sobresaliente");
} */


/* 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión */

/* let cadena = prompt("Ingresa una cadena de texto, o 'cancelar' para salir...");
let cadenasConcatenadas = "";

while (cadena != "cancelar"){
    cadenasConcatenadas += cadena + " - ";
    cadena = prompt("Ingresa una cadena de texto, o 'cancelar' para salir...");
    
}

console.log(cadenasConcatenadas);  */


/* 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */

/* let numero = Number(prompt("Ingresa un numero..."));
let sumaTotal = 0;

while (numero != 0){
    if (isNaN(numero)) {
        alert("El valor ingresado no es un numero");
        numero = Number(prompt("Ingresa un numero..."));
    }
    else {
        sumaTotal += numero;
        numero = Number(prompt("Ingresa un numero..."));
    }  
}

console.log(`La suma total de los numeros es de ${sumaTotal}`);
 */


/* 22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número 23
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

/* let dni = Number(prompt("Ingresa tu numero de DNI - 'Cancelar' para terminar."));
let letraDni;

while (dni != "cancelar") {
    if (isNaN(dni)){
        alert("El DNI debe contener solo numeros");
    }
    else if (dni < 0 || dni > 99999999){
        alert("El DNI debe ser mayor a 0 y menor a 99.999.999");
    } 
    
    switch (dni % 23){
        case 0:
            letraDni = "T";
            break;
        case 1: 
            letraDni = "R";
            break;
        case 2: 
            letraDni = "W";
            break;
        case 3: 
            letraDni = "A";
            break;
        case 4: 
            letraDni = "G";
            break;
        case 5:
            letraDni = "M";
            break;
        case 6:
            letraDni = "Y";
            break;
        case 7:
            letraDni = "F";
            break;
        case 8:
            letraDni = "P";
            break;
        case 9:
            letraDni = "D";
            break;
        case 10:
            letraDni = "X";
            break;
        case 11:
            letraDni = "B";
            break;
        case 12:
            letraDni = "N";
            break;
        case 13:
            letraDni = "J";
            break;
        case 14:
            letraDni = "Z";
            break;
        case 15:
            letraDni = "S";
            break;
        case 16:
            letraDni = "Q";
            break;
        case 17:
            letraDni = "V";
            break;
        case 18:
            letraDni = "H";
            break;
        case 19:
            letraDni = "L";
            break;
        case 20:
            letraDni = "C";
            break;
        case 21:
            letraDni = "K";
            break;
        case 22: 
            letraDni = "E";
            break;
        default:
            console.log("error")
    }

    console.log(`La letra correspondiente al dni N°${dni} es la "${letraDni}"`)
    dni = Number(prompt("Ingresa tu numero de DNI - 'Cancelar' para terminar."))
} */




/* 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 
1
22
333
4444
55555
666666
……. */

/* let contador = 1;

for (let i=1; i <= 30; i++){
    console.log(i.toString().repeat(contador));
    contador += 1;
} */


/* 24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1 */

/* let numero = Number(prompt("Ingresa un numero..."));

for (let i = numero; i >= 1; i--){
    console.log(numero.toString().repeat(numero));
    numero -= 1;
} */


/* 25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */

/* for (i=1; i <= 500; i++){
    if (i % 4 === 0 && i % 9 === 0 && i % 5 === 0){
        console.log(`${i} es multiplo de 4 y de 9`);
        console.log("_____________________");
    }
    else if (i % 4 === 0 && i % 9 === 0){
        console.log(`${i} es multiplo de 4 y de 9`);
    }
    else if (i % 4 === 0 && i % 5 === 0){
        console.log(`${i} es multiplo de 4`);
        console.log("_____________________");
    }
    else if (i % 9 === 0 && i % 5 === 0){
        console.log(`${i} es multiplo de 9`);
        console.log("_____________________");
    }
    else if (i % 4 === 0){
        console.log(`${i} es multiplo de 4`);
    }
    else if (i % 9 === 0){
        console.log(`${i} es multiplo de 9`);
    }
    else if (i % 5 === 0){
        console.log(i);
        console.log("_____________________");
    }
    else {
        console.log(i);
    }
} */


/*
Actividad Práctica Adicional - JavaScript Unidad 2

Tema: Funciones

1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”
*/

/* function mostrarNVeces(n){
    for (i = 0; i < n; i++){
        console.log("Bienvenidos al curso full stack2020")
    }
}


let n = prompt("Ingresa un numero...");

mostrarNVeces(n) */



/*
2. Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.
*/

/* function calcularMaximo(n1, n2){
    let maximo;
    if (n1 > n2){
        maximo = n1;
    }
    else {
        maximo = n2;
    }
    return maximo;
}

let n1 = Number(prompt("Ingresa un numero..."));
let n2 = Number(prompt("Ingresa un numero..."));

console.log(calcularMaximo(n1,n2)); */


/*
3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.
*/

/* let promedio3 = (n1, n2, n3) => (n1 + n2 + n3) / 3;

let n1 = Number(prompt("Ingresa un numero..."));
let n2 = Number(prompt("Ingresa un numero..."));
let n3 = Number(prompt("Ingresa un numero..."));

console.log(promedio3(n1,n2,n3)); */



/*
4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)
*/

/* function leerNotas(){
    let nota = 0;
    let cantidadNotas = 0;
    let sumaNotas = 0;
    
    nota = Number(prompt("Ingresa una nota, o '-1' para no ingresar mas notas..."));

    while (nota !== -1){
        cantidadNotas += 1;
        sumaNotas += nota;
        nota = Number(prompt("Ingresa una nota, o '-1' para no ingresar mas notas..."));
    }
    let promedio = sumaNotas / cantidadNotas;
    return promedio;
}

console.log(leerNotas()) */


/*
Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro
*/

/* let siguiente = numero => numero + 1;

console.log(siguiente(parseInt(prompt("Ingresa un numero...")))); */



/*
5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.
*/

/* let doble = numero => numero * 2;

console.log(doble(Number(prompt("Ingresa un numero...")))); */



/*
6. Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado.
*/

/* let cuadrado = numero => numero * numero;

console.log(cuadrado(Number(prompt("Ingresa un numero...")))); */


/*
7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado.
*/


/* let siguiente = numero => numero + 1;
let doble = numero => numero * 2;
let cuadrado = numero => numero * numero;

let imprimirValores = numero => {
    let numSiguiente = siguiente(numero);
    let numDoble = doble(numero);
    let numCuadrado = cuadrado(numero);

    console.log("Siguiente: " + numSiguiente);
    console.log("Doble: " + numDoble);
    console.log("Cuadrado: " + numCuadrado);
}

let numero = Number(prompt("Ingresa un numero..."));
imprimirValores(numero);  */




/*
8. Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al el doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble .
*/

/* let siguiente = numero => numero + 1;
let doble = numero => numero * 2;

function imprimirElDobleDelSiguiente(numero){
    let numDoble = doble(numero);
    let siguienteDelDoble = siguiente(numDoble);

    console.log(siguienteDelDoble);
}

let numero = Number(prompt("Ingresa un numero..."));
imprimirElDobleDelSiguiente(numero); */



/*
9. Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado
*/

/* let siguiente = numero => numero + 1;
let doble = numero => numero * 2;
let cuadrado = numero => numero * numero;

function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    let numDoble = doble(numero);
    let siguienteDelDoble = siguiente(numDoble);
    let cuadradoDelSiguienteDelDoble = cuadrado(siguienteDelDoble);

    console.log(cuadradoDelSiguienteDelDoble);
}

let numero = Number(prompt("Ingresa un numero..."));
imprimirElDobleDelSiguienteAlCuadrado(numero); */


/*
10.Una función que dado la longitud de un lado de un cuadrado devuelva
el perímetro
*/

/* function calcularPerimetroDeCuadrado(lado){
    let perimetro = lado * 4;
    return perimetro;
}

let lado = Number(prompt("Ingresa la medida de un lado del cuadrado..."));
console.log(calcularPerimetroDeCuadrado(lado)); */



/*
11. Una función que dado la longitud de un lado de un cuadrado devuelva
la superficie.
*/

/* function calcularSuperficieDeCuadrado(lado){
    let superficie = lado * lado;
    return superficie;
}

let lado = Number(prompt("Ingresa la medida de un lado del cuadrado..."));
console.log(calcularSuperficieDeCuadrado(lado)); */




/*
12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo).
*/

/* function calcularCircunferencia(radio){
    let circunferencia = (Math.PI * 2) * radio;
    return circunferencia;
}

let radio = Number(prompt("Ingresa el radio del circulo..."));
console.log(calcularCircunferencia(radio)); */



/*
13.Una función que dado el radio de un círculo devuelva el área del
círculo.
*/

/* function calcularAreaDeCirculo(radio){
    let area = Math.PI * (radio * radio);
    return area;
}

let radio = Number(prompt("Ingresa el radio del circulo..."));
console.log(calcularAreaDeCirculo(radio)); */




/*
14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto).
*/

/* function diasEnUnMes(mes){
    let dias;
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12){
        dias = 31;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        dias = 30;
    } else if (mes === 2){
        dias = 28;
    } else {
        console.warn("El numero indicado no correspone a un mes valido...");
    }
    return dias;
}

let mes = Number(prompt("Ingresa el numero correspondiente al mes..."));
console.log(diasEnUnMes(mes)); */




/*
15.Una función que reciba como parámetro un año y diga si ese año es
bisiesto.
*/

/* function esBisiesto(año){
    let bisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) ? true : false;
    return bisiesto;
}

let año = Number(prompt("Ingresa el año..."));
console.log(esBisiesto(año)); */
 



/*
16.Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes.
*/

/* function diasDeUnMesX(dia, mes, año){
    let dias; 
    if (mes === 2 && (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0))){
        dias = 29;
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12){
        dias = 31;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        dias = 30;
    } else if (mes === 2){
        dias = 28;
    }

    return dias;     
}

console.log(diasDeUnMesX(23, 02, 1998)); */


/*
17.Una función que reciba día, mes y año y devuelva el día anterior
*/

/* function calcularDiaAnterior(dia, mes, año){
    
    function diasEnUnMes(mes){
        let dias;
        if (mes === 2 && (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0))){
            dias = 29;
        } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12){
            dias = 31;
        } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
            dias = 30;
        } else if (mes === 2){
            dias = 28;
        } 
        return dias;
    }

    let anterior = numero => numero - 1;

    if (dia === 1 && mes === 1){
        mes = 12;
        dia = diasEnUnMes(mes);
        año = anterior(año);
    } 
    else if (dia === 1 && mes > 1){
        mes = anterior(mes);
        dia = diasEnUnMes(mes);
    }
    else if (dia > 1){
        dia = anterior(dia);
    }

    let diaAnterior = `${dia}/${mes}/${año}`;

    return diaAnterior;
}

let dia = Number(prompt("Ingresa el dia..."));
let mes = Number(prompt("Ingresa el mes"));
let año = Number(prompt("Ingresa el año..."));
console.log(calcularDiaAnterior(dia, mes, año)); */



    

/*
18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.
*/

/* function ultimoDiaDelMes(dia, mes, año){
    if (mes === 2 && (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0))){
        dia = 29;
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12){
        dia = 31;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        dia = 30;
    } else if (mes === 2){
        dia = 28;
    } 
    
    return dia;    
}

let dia = Number(prompt("Ingresa el dia..."));
let mes = Number(prompt("Ingresa el mes"));
let año = Number(prompt("Ingresa el año..."));
console.log(ultimoDiaDelMes(dia, mes, año)); */




/*
Tema: String y Array

19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola.
*/

/* let edades = [18, 19, 18, 22, 20, 25, 22, 34, 32, 29, 45];
let i = 0;

while (i < edades.length){
    console.log(edades[i]);
    i += 1;
} */



/*
20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while".
Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
de que su solución funcione para cualquier array que se pase!
*/

let edades = [30, 19, 18, 22, 20, 25, 22, 34, 32, 29, 45];

/*
for (let i=0; i < edades.length; i++){
    if (edades[i] % 2 === 0){
        console.log(edades[i]);
    }
} */



/*
21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola.
*/

/* let edades = [30, 19, 18, 22, 20, 25, 22, 34, 32, 29, 45];

function imprimirMenorNumEnArray(array){
    let menorNumero = array[0]; 
    for (let i = 0; i < array.length; i++){
        if (array[i] < menorNumero){
            menorNumero = array[i];
        }
    }
    console.log(menorNumero);
}

imprimirMenorNumEnArray(edades) */



/*
22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola.
*/

/* let edades = [30, 19, 18, 22, 20, 25, 22, 34, 32, 29, 45];

function imprimirMayorNumEnArray(array){
    let mayorNumero = array[0]; 
    for (let i = 0; i < array.length; i++){
        if (array[i] > mayorNumero){
            mayorNumero = array[i];
        }
    }
    console.log(mayorNumero);
}

imprimirMayorNumEnArray(edades);  
 */


/*
23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola. Por ejemplo, dada la siguiente
array e índice, la función imprimirá '6'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
*/

/* function imprimirElementoEnArray(array, index){
    console.log(array[index]);
}

imprimirElementoEnArray(edades, 4);
imprimirElementoEnArray(edades, 1);
imprimirElementoEnArray(edades, edades.length -1);
imprimirElementoEnArray(edades, edades.length -3); */

/*
24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
función imprimirá '6,23,33,100'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
*/

/* let array1 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function imprimirValoresRepetidos(array){
    let repetidos = [];

    for (let i=0; i < array.length; i++){
        for (let j=i+1; j < array.length; j++){
            if (array[i] === array[j]){
                console.log(array[i]);   
            }
        }
    }
}
imprimirValoresRepetidos(array1); */

/*
25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
"Negro"
*/

/* let myColor = ["Red", "Green", "White", "Black"];

function transformarEnCadena(array){
    let cadena = ""; 
    for(let i=0; i < array.length; i++){
        cadena += `"${array[i]}", `
    }
    return cadena; 
}

console.log(transformarEnCadena(myColor)); */


/*
26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423.
*/

/* function invertirNumero(numero){
    let numeroInvertido = numero.toString().split("").reverse().join("");
    return numeroInvertido;
}

console.log(invertirNumero(1234)); */




/*
27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
ser 'abeemrstw'. La puntuación y los números no se pasan en la
cadena.
*/

/* function ordenarAlfabeticamente(cadena){
    cadenaOrdenada = cadena.split("").sort().join("");
    return cadenaOrdenada;
}

console.log(ordenarAlfabeticamente("hola"));
console.log(ordenarAlfabeticamente("buenas tardes")); */





/*
28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia".
*/

/* function convertMayusPrimerasLetras(cadena){
    let cadenaConMayusculas = cadena.split("");
    cadenaConMayusculas[0] = cadenaConMayusculas[0].toUpperCase();

    for (let i = 0; i < cadena.length; i++){
        if (cadenaConMayusculas[i] === " "){
            cadenaConMayusculas[i+1] = cadenaConMayusculas[i + 1].toUpperCase();
            
        }
    }

    return cadenaConMayusculas.join("");
}

console.log(convertMayusPrimerasLetras("hola como estas"));
console.log(convertMayusPrimerasLetras(" el   gato se comio la comida, y ya no hay mas")); */



/*
29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo"
*/

function buscarPalabraMasLarga(frase){
    let palabras = frase.split(" ");
    let masLarga = palabras[0];
    
    for (let i=0; i < palabras.length; i++){
        for (let j=i+1; j < palabras.length; j++){
            if (palabras[i].length > masLarga.length){
                masLarga = palabras[i];
            }
        }
    }
    return masLarga;
    
}

console.log(buscarPalabraMasLarga("el desarrollo web es una tarea muy compleja para el desarrollador inexperto"));


