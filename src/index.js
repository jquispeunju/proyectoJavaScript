var variableVar = 10;
let numero = 50;
const PI = 3.1416;
if(numero > 40){
    var variableVar = 20;    
    console.log(variableVar);

    let numero = 80;
    console.log(numero);
    console.log(PI);
    

}
numero = 80;

console.log("Fuera del if " + variableVar);
console.log("Fuera del if " + numero);

let cadena = "Fundamentos de Programacion Web";
let cadenaConComillasSimples = 'Otra cadena';
let cadenaInvertida = `Otra forma de declarar una cadena`; 

console.log(`Se concatena cadena: ${cadena} con cadenaConComillasSImples ${cadenaConComillasSimples}`);
console.log("Se concatena cadena " + cadena + " con cadenaConComillasSimples " + cadenaConComillasSimples);
console.log("Este texto tiene comilllas 'Fundamentos' ");

//Longitud de una cadena

let longitud = cadena.length;
console.log(longitud);

//Acceso a caracteres
console.log(cadena[4]);
console.log(cadena.charAt(4));
console.log("La ultima letra es: " + cadena.charAt(cadena.length - 1));

//Busqueda de subcadenas

console.log(cadena.includes("zz"));

console.log(cadena.substring(0,11));

console.log(cadena.indexOf("de"));

//Reemplazar
console.log(cadena.replace("Fundamentos", "Hola mundo"));

console.log(cadena.toUpperCase());

const dia = "lunes";

switch (dia){
    case "lunes": 
        console.log("Hoy tengo FPW");
        break;
    case "jueves":
        console.log("Tengo FPW");
    case "sabado":
    case "domingo":
        console.log("Es fin de semana y tambien debo estudiar FPW");
        break;
    default:
        console.log("Tengo otras materias");
        break;
} 

if (condition) {
    
} else {
    
}

for (let index = 0; index < cadena.length; index++) {    
    
}

while (condition) {
    
}

do {
    
} while (condition);





