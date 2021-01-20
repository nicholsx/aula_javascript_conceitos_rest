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

/*const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

//const obj2 = {...obj}; // Shallow Clone / Clone Raso
const obj2 = {...obj, subObj: {...obj.subObj}};

obj2.subObj.test = 456;

console.log(obj);*/

/*----------------------------------------------------------*/

var arr = ['Apple' , 'Banana' , 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

///************Destructuring Assignment */

//Ex1
/*var [apple2, banana2, orange2, [tomato2]] = ['Apple' , 'Banana' , 'Orange', ["Tomato"]]; // Padrão de destruir o array

console.log(tomato, tomato2);*/

///************Destructuring Assignment */
//Ex2

/*var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Celso'
};

// Destructuring Assignment

//var { name } = obj;
var [apple2] = arr;
var { name: name2 } = obj;

name2 = 'Henrique';

console.log(obj);*/


///************Destructuring Assignment */
//Ex3

/*var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Celso',
    props: {
        age: 26
    }
};

var age = obj.props.age;

// Destructuring Assignment

//var { name } = obj;
var [apple2] = arr;
var { 
    props: { age: age2 } } 
    = obj;

console.log(age);*/


///************Destructuring Assignment */
//Ex4

/*var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

// Destructuring Assignment / Arrays

//var { name } = obj;
var [apple2] = arr;
var { 
    props: {
         age: age2, 
         favoriteColors: [color1, color2] } } 
    = obj;

console.log(color1);*/

///************Destructuring Assignment */
//Ex5

var arr = [{name:'Apple', type: 'fruit'}];
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var fruit1 = arr[0].name;

// Destructuring Assignment / Objetos

let [{ name: fruitName }] = arr;

// Functions

/*function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5,5]));*/

/*function sum([a, b] = [0,0]) {
    return a + b;
}*/

function sum({a, b}) {
    return a + b;
}

console.log(sum({ a: 5, b: 5}));
