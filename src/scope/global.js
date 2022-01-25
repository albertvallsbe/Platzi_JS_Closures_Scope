var hello = 'Hello';
let world = 'Hello World';
const helloworld = 'Hello World!';
// console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

//prova 1 (Mala Practica!)
const helloWorld = () => {
    globalVar = 'Im global';
}

helloWorld()
console.log(globalVar);

//prova 2
const anotherFunction = () => {
    var localVar = globalVar = 'Im global 2';
}

anotherFunction()
console.log(globalVar);
console.log(localVar); // Accedir a la variable Local donarà error.
// console.log(localVar);
