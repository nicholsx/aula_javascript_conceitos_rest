/*function sum(a,b) {
    return a + b;
}

console.log(sum(5,5));*/

/*function sum(a,b) { // Forma antiga 
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5,5,5,2,3));*/

//*******Rest Operator ... */

//Ex1 Rest Operator
/*function sum(...args) { 
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3)); */

//Ex2 Rest Operator / Arrow Functions 
/*const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum(5,5,5,2,3));*/

/*//Ex3 Rest Operator
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1) 

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sum(5,5,5,2,3))*/

//Ex4 Rest Operator, Spread Operator ...
//Rest Operator pega os parametros e transforma em um array
//Spread Operator pega todos os itens de (listas, strings, arrays, objetos literais e ojetos iteraveis.) e transformar em parametro.
//Spread Operator quebra listas, strings, arrays, objetos literais e ojetos iteraveis. 
/*const multiply = (...args) => args.reduce((acc, value) => acc * value, 1) 

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5,5,5,2,3));*/

//Ex5 Rest Operator, Spread Operator ... Transformou a string em um array de (22)
// (22) ["D", "i", "g", "i", "t", "a", "l", " ", "I", "n", "n", "o", "v", "a", "t", "i", "o", "n", " ", "O", "n", "e"]

/*const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);*/

//Ex6 Rest Operator, Spread Operator ... Cada item do Array em argumento da função; Ou parametros.

/*const str = 'Digital Innovation One';
const arr = [1,2,3,4];

// Argumentos
function logArgs() {
    console.log(arguments);
}*/

/*//Parametros

const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

//const arr2 = [5, 6, 7].concat(arr);
//const arr2 = arr.concat([5, 6, 7]);
//const arr2 = [...arr, 5, 6, 7]; // Spread Operator / Ordem arr e arr2
//const arr2 = [5, 6, 7, ...arr]; // Spread Operator / Ordem arr2 e arr

//const arr3 = [...arr2, ...arr, 0,0,0];

const arrClone = [...arr]; // Clone do primeiro array 

console.log(arr3);

//logArgs(...arr);*/


//Ex7 Rest Operator, Spread Operator ... Objetos com Spread Operator construindo outro Objeto
// Ordem do spread que irá definir o que aparece no seu console
/*const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr]; // Clone do primeiro array 

const obj = {
    test: 123
};

const obj2 = {
    ...obj, 
    test2: 'hello'
};

console.log(obj2);*/

//Ex8 Rest Operator, Spread Operator ... Objetos com Spread Operator construindo outro Objeto
// Ordem do spread que irá definir o que aparece no seu console

/*const obj = {
    test: 123
};

const obj2 = {
    ...obj, 
    test: 456
};

const objMerged = {
    ...obj,
    ...obj2,
};

console.log(objMerged);*/

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

//const obj2 = {...obj}; // Shallow Clone / Clone Raso
const obj2 = {...obj, subObj: {...obj.subObj}};

obj2.subObj.test = 456;

console.log(obj);