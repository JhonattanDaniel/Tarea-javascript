# Taller

## Ejercicio 1

```js
var nombre = prompt("Dime tu nombre");
console.log(`Ahora estas en la matrix ${nombre}`);
```

## Ejercicio 2

```js
var decimal = prompt("Digite un numero decimal");
var entero = prompt("Digite un numero entero");
var suma = parseFloat(decimal)+parseInt(entero);
console.log(`El resultado de la suma es ${suma}`);
```

## Ejercicio 3

```js
var n1 = prompt("Digite un numero");
var n2 = prompt("Digite un segundo numero ");
var suma1 = parseFloat(n1)+parseFloat(n2);
console.log(`suman ${suma}`);
var n3 = parseFloat(prompt("Digite un ultimo numero"));
var mult = suma1 * n3;
console.log(`Multiplicacion por el ultimo numero ${mult}`);
```
## Ejercicio 4

```js
var km = parseFloat(prompt("Digite los kilometros recorridos"));
var combustible = prompt("Digite cantidad de litros de combustible consumido");
var consumoxkm = km / combustible;
console.log(`el consumo por kilometro es ${consumoxkm}`);
```

## Ejercicio 5

```js
var tempF = parseFloat(prompt("Ingresar una temperatura expresada en Farenheit"));
var tempC = (5/9) * (tempF - 32);
consolole.log(`El equivalente en grados Celsius es ${tempC}`);
```

## Ejercicio 6
```js
var n1 = (prompt("primer numero"));
var n2 = (prompt("segundo numero"));
var n3 = (prompt("tercer numero"));
var promedio = parseFloat((n1+n2+n3)/3);
console.log(`El promedio de los tres numeros es ${promedio}`);
```

## Ejercicio 7

```js
var numeroPro = parseFloat(prompt("digitar valor"));
var porcentaje = ((numeroPro-(numeroPro*15)/100) );
console.log(`descontando el 15% queda ${porcentaje}`);
```

## Ejercicio 8

```js
var palabra1= prompt("primera palabra");
var palabra2= prompt("segunda palabra");
var palabras= palabra1+" "+palabra2;
console.log(palabras);
```

## Ejercicio 9

```js
var texto= prompt("Escribir texto");
console.log(`el caracter en primer lugar es ${texto.charAt()}`);
var numeroT= prompt("Ingresar numero positivo menor o igual a "+texto.length);
if(numeroT <= texto.length){
    console.log(`El caracter en esta posicion es ${texto.charAt(numeroT)}`);
}else{
    console.log(`ingresaste un numero incorrecto`);
}
```

## Ejercicio 10

```js
var numeroShows= parseInt (prompt("Cuantos shows musicales has visto este a??o?"));
console.log(`Shows vistos ${numeroShows}`);
numeroShows > 3;
```

## Ejercicio 11

```js
var fecha= parseInt(prompt("Escribir fecha"));
var anio = parseInt (fecha%10000);
var mesdia= parseInt (fecha/10000);
var mes = parseInt (mesdia%100);
var dia = parseInt (mesdia/100);
console.log(`la fecha en formato DDMMAAAA ${fecha} : ${dia} / ${mes} / ${anio}`); 
```


## Ejercicio 12

```js
var numeropar= parseInt(prompt("digite un numero"));
numeropar%2 == 0;
```

## Ejercicio 13

```js
var edad= parseInt(prompt("digite su edad"));
var articulos= parseInt(prompt("cantidad de articulos comprados"));
edad > 18 && articulos > 1;
```


## Ejercicio 14

```js
var cadena= prompt("Escribir un textp");
cadena.length%2 == 0
```

## Ejercicio 15

```js
var palabra1= prompt("Escribir una palabra");
var palabra2= prompt("Escribir otra palabra");
palabra1.length < palabra2.length;
```

## Ejercicio 16

```js
var nombre1= prompt("Escriba su nombre");
var nombre2= prompt("Escriba otro nombre");
nombre1.charAt() == nombre2.charAt() || nombre1.charAt(nombre1.length - 1) == nombre2.charAt(nombre2.length -1);
```

## Ejercicio 17

```js
var absoluto= parseInt(prompt("digite un numero"));
if(absoluto < 0){
    absoluto = absoluto*(-1);
    console.log(absoluto);
}else{
    console.log(absoluto);
}
```

## Ejercicio 18

```js
var n1= parseInt(prompt("digite un numero"));
var n2= parseInt(prompt("digite otro numero"));
if(n1>n2){
    console.log(`el mayor es ${n1}`);
}else{
    console.log(`el mayor es ${n2}`);
}
```

## Ejercicio 19

```js
var letra= prompt("Escriba una sola letra");
if(letra.length == 1){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log(`la letra ${letra} es vocal`);
    }else{
        console.log(`la letra ${letra} No es vocal`);
    }
}else{
    console.log(`no se puede procesar el dato mayor a un caracter`)
}
```

## Ejercicio 20

```js
var n1= parseInt(prompt("digite un numero"));
var n2= parseInt(prompt("digite otro numero"));
var n3= parseInt(prompt("digite ultimo numero"));
if(n1<n2 && n1<n3){
    console.log(`el menor es ${n1}`);
}else if(n2<n3 && n2<n1){
    console.log(`el menor es ${n2}`);
}else{
    console.log(`el menor es ${n3}`);
}
```