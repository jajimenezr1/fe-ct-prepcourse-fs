/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
//    var mainArray = [];
// for (let i = 0; i < Object.keys(objeto).length; i++) {
//    mainArray.push([Object.keys(objeto)[i], objeto[Object.keys(objeto)[i]]]) 
// }
// return mainArray;
// }

var array =[];
for(x in objeto){
   array.push([x, objeto[x]]);
}
return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var ordenadas = string.split("").sort(function(a,b){
      return a.charCodeAt(0) - b.charCodeAt(0);
   }).join("");

   var objeto = {};
   for (let i = 0; i < ordenadas.length; i++) {
      if(Object.keys(objeto).includes(ordenadas[i])){
         objeto[ordenadas[i]]++;
      }else{
         objeto[ordenadas[i]] = 1;
      }
     
   }
   return objeto;     
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var resultado = "";
   var mayusculas = "";
   var minusculas = "";

   for (let i = 0; i <string.length; i++) {
      if(string[i] === string[i].toUpperCase()){
         mayusculas += string[i];
      }  else{
         minusculas += string[i];
      }    
   }
   resultado = mayusculas + minusculas;

   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let arrayfrase = frase.split(" ");
   let fraseEspejo = [];

   for (let i = 0; i < arrayfrase.length; i++) {
         let espejo = arrayfrase[i].split("").reverse().join("");
         fraseEspejo.push(espejo);
   }
   return fraseEspejo.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let arraynumero = numero.toString().split("").reverse().join("");

  
      if(arraynumero == numero){
         return "Es capicua"
      }else{
         return "No es capicua"
      }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let objeto = string.split("");
   let palabraModificada = [];

   for (let i = 0; i < objeto.length; i++) {
      if(objeto[i] === "a" || objeto[i] === "b" || objeto[i] === "c"){
         delete objeto[i];
         }else{
            palabraModificada.push(objeto[i]);
      }
      }
   return palabraModificada.join("")
}

// return string.replace(/[abc]/g,"");

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
return arrayOfStrings.sort((a, b) => a.length - b.length)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let numeros = [];

   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
       
         if(array1[i] === array2[j]){
            numeros.push(array1[i]);
         }
   }
}
return numeros;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
