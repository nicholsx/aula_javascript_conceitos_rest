//********Symbols ********** // Maneira de gerar um identificar unico, não pode ser invocado utilizando new.
//Somente como uma function, um symbol nunca é igual a outro. 
// Identificador unico, que não pode ser advinhado
// Pode ser utilizado para criar propriedades privadas

/*const uniqueId = Symbol('Hello');*/

// Well knows symbols

//Symbol.iterator // Forma de Utilizar Generators
//Symbol.split
//Symbol.toStringTag
// Adicionar propriedades ao seu objeto, adiciona capacidades 

/*const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';*/

//console.log(arr[Symbol.iterator]().next());

/*const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return{
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    } 
};*/

/*for (let value of obj) { // ****Symbol  Iterator**** Forma Correta de iteração
    console.log(value);
};*/

/*const arr2 = [...obj];

console.log(arr2);*/

/*const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*for (let value of arr) { // ****Symbol  Iterator**** Forma Correta de iteração
    console.log(value);
}*/

/*for (let value of str) { // ****Symbol  Iterator**** Forma Correta de iteração
    console.log(value);
}*/

// *********** Generators ************/////////
// Generators são funções com pausas

/*const uniqueId = Symbol('Hello');

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i <this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}

/*function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}*/

/*const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function* hello() {
    console.log('Hello');
    yield 1 ;

    console.log('From');
    const value = yield 2 ;

    console.log(value);
    yield 3;
}

const it = hello();
 
console.log(it.next()); // Comprovando
console.log(it.next());
console.log(it.next('Outside!')); */
