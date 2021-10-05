//1
var nombre = prompt("Dime tu nombre");
console.log(`Ahora estas en la matrix ${nombre}`);

//2
var decimal = prompt("Digite un numero decimal");
var entero = prompt("Digite un numero entero");
var suma = parseFloat(decimal)+parseInt(entero);
console.log(`El resultado de la suma es ${suma}`);

//3
var n1 = prompt("Digite un numero");
var n2 = prompt("Digite un segundo numero ");
var suma1 = parseFloat(n1)+parseFloat(n2);
console.log(`suman ${suma}`);
var n3 = parseFloat(prompt("Digite un ultimo numero"));
var mult = suma1 * n3;
console.log(`Multiplicacion por el ultimo numero ${mult}`);

//4
var km = parseFloat(prompt("Digite los kilometros recorridos"));
var combustible = prompt("Digite cantidad de litros de combustible consumido");
var consumoxkm = km / combustible;
console.log(`el consumo por kilometro es ${consumoxkm}`);

//5
var tempF = parseFloat(prompt("Ingresar una temperatura expresada en Farenheit"));
var tempC = (5/9) * (tempF - 32);
consolole.log(`El equivalente en grados Celsius es ${tempC}`);

//6
var n1 = (prompt("primer numero"));
var n2 = (prompt("segundo numero"));
var n3 = (prompt("tercer numero"));
var promedio = parseFloat((n1+n2+n3)/3);
console.log(`El promedio de los tres numeros es ${promedio}`);

//7
var numeroPro = parseFloat(prompt("digitar valor"));
var porcentaje = ((numeroPro-(numeroPro*15)/100) );
console.log(`descontando el 15% queda ${porcentaje}`);

//8
var palabra1= prompt("primera palabra");
var palabra2= prompt("segunda palabra");
var palabras= palabra1+" "+palabra2;
console.log(palabras);

//9
var texto= prompt("Escribir texto");
console.log(`el caracter en primer lugar es ${texto.charAt()}`);
var numeroT= prompt("Ingresar numero positivo menor o igual a "+texto.length);
if(numeroT <= texto.length){
    console.log(`El caracter en esta posicion es ${texto.charAt(numeroT)}`);
}else{
    console.log(`ingresaste un numero incorrecto`);
}

//10
var numeroShows= parseInt (prompt("Cuantos shows musicales has visto este año?"));
console.log(`Shows vistos ${numeroShows}`);
numeroShows > 3;

//11
var fecha= parseInt(prompt("Escribir fecha"));
var anio = parseInt (fecha%10000);
var mesdia= parseInt (fecha/10000);
var mes = parseInt (mesdia%100);
var dia = parseInt (mesdia/100);
console.log(`la fecha en formato DDMMAAAA ${fecha} : ${dia} / ${mes} / ${anio}`); 

//12
var numeropar= parseInt(prompt("digite un numero"));
numeropar%2 == 0;

//13
var edad= parseInt(prompt("digite su edad"));
var articulos= parseInt(prompt("cantidad de articulos comprados"));
edad > 18 && articulos > 1;

//14
var cadena= prompt("Escribir un textp");
cadena.length%2 == 0

//15
var palabra1= prompt("Escribir una palabra");
var palabra2= prompt("Escribir otra palabra");
palabra1.length < palabra2.length;

//16
var nombre1= prompt("Escriba su nombre");
var nombre2= prompt("Escriba otro nombre");
nombre1.charAt() == nombre2.charAt() || nombre1.charAt(nombre1.length - 1) == nombre2.charAt(nombre2.length -1);

//17
var absoluto= parseInt(prompt("digite un numero"));
if(absoluto < 0){
    absoluto = absoluto*(-1);
    console.log(absoluto);
}else{
    console.log(absoluto);
}

//18
var n1= parseInt(prompt("digite un numero"));
var n2= parseInt(prompt("digite otro numero"));
if(n1>n2){
    console.log(`el mayor es ${n1}`);
}else{
    console.log(`el mayor es ${n2}`);
}

//19
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

//20
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
