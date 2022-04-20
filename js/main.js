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

let frase = prompt("Escribe una frase");
let letraBuscada = "a"
let contador = 0;
for (let i=0; i < frase.length; i++){
    if (frase[i].toLocaleLowerCase() === letraBuscada){
        contador += 1;
    }
}
console.log(`La frase "${frase}" contiene ${contador} veces la letra ${letraBuscada}.`)


/* 10. Escribe un programa que pida una frase y escriba las vocales que aparecen */


/* 11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales */


/* 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales */


/* 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro) */


/* 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible) */


/* 15. Escribir un programa que escriba en pantalla los divisores de un número dado */


/* 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados */


/* 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad) */


/* 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir */


/* 19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */


/* 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión */


/* 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */


/* 22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número */


/* 23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
……. */


/* 24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1 */


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


