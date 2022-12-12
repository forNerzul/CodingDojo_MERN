// Ejercicio 1
console.log(hello); // se imprime la variable hello sin embargo esto va a retornar undefined debido a que la variable hello no ha sido asignada en esta instancia del codigo
var hello = "world"; // se declara la variable hello y se le asigna el valor "world"

// reinterpretacion Ejericio 1

var hello;
console.log(hello);
hello = "world";

// Ejercicio 2
var needle = "haystack"; // se declara la variable needle y se le asigna el valor "haystack"
test(); // se llama a la funcion test
function test() {
    var needle = "magnet"; // se declara la variable needle y se le asigna el valor "magnet"
    console.log(needle); // se imprime el valor de la variable needle con el valor "magnet"
}

// reinterpretacion Ejericio 2

var needle;
needle = "haystack";
// en otro scope
var needle = "magnet";
console.log(needle);

// Ejercicio 3
var brendan = "super cool"; // se declara la variable brendan y se le asigna el valor "super cool"
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan); // se imprime el valor de la variable brendan con el valor "super cool" ya que la funcion print no se llama

// Ejercicio 4
var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

// let food = "chicken";
// console.log(food);
// food = "half-chicken";
// console.log(food);
// food = "gone";

// Ejercicio 5
mean(); // se llama a la funcion mean esto causará un error debido a que la funcion mean no ha sido declarada
console.log(food); // se imprime el valor de la variable food sin embargo esta no ha sido declarada
var mean = function () {
    food = "chicken"; // se asigna el valor "chicken" a la variable food
    console.log(food);
    var food = "fish"; // se asigna el valor "fish" a la variable food y se declara como var por lo que se eleva al inicio de la funcion esto permite que la variable sea accesible desde cualquier parte de la funcion
    console.log(food);
};
// console.log(food); // se imprime el valor de la variable food sin embargo esta no ha sido declarada esto va a dar un error

// Ejercicio 6
console.log(genre); // se imprime la variable genre sin embargo esto va a retornar undefined debido a que la variable genre no ha sido asignada en esta instancia del codigo
var genre = "disco"; // se declara la variable genre y se le asigna el valor "disco" esto funciona porque genre fue declarada como var y se eleva al inicio del archivo
rewind(); // se ejecuta la funcion rewind
function rewind() {
    genre = "rock"; // se asigna el valor "rock" a la variable genre esto funciona porque genre fue declarada como var mas abajo y se eleva al inicio de la funcion
    console.log(genre); // se imprime el valor de la variable genre con el valor "rock"
    var genre = "r&b"; // se asigna el valor "r&b" a la variable genre y se declara como var por lo que se eleva al inicio de la funcion esto permite que la variable sea accesible desde cualquier parte de la funcion y del archivo
    console.log(genre); // se imprime el valor de la variable genre con el valor "r&b"
}
console.log(genre); // se imprime el valor de la variable genre con el valor "disco" y queda con el valor "disco" debido a que la funcion rewind no modifica el valor de la variable genre es este escope

// Ejercicio 7
dojo = "san jose"; // se asigna el valor "san jose" a la variable dojo esto funciona porque dojo fue declarada como var y se eleva al inicio del archivo
console.log(dojo); // se imprime el valor de la variable dojo con el valor "san jose"
learn(); // se ejecuta la funcion learn
function learn() {
    dojo = "seattle"; // se asigna el valor "seattle" a la variable dojo esto funciona porque dojo fue declarada como var y se eleva al inicio de la funcion
    console.log(dojo); // se imprime el valor de la variable dojo con el valor "seattle"
    var dojo = "burbank"; // se asigna el valor "burbank" a la variable dojo y se declara como var por lo que se eleva al inicio de la funcion esto permite que la variable sea accesible desde cualquier parte de la funcion y del archivo
    console.log(dojo); // se imprime el valor de la variable dojo con el valor "burbank"
}
console.log(dojo); // se imprime el valor de la variable dojo con el valor "san jose" y queda con el valor "san jose" debido a que la funcion learn no modifica el valor de la variable dojo es este escope

// Ejercicio 8
console.log(makeDojo("Chicago", 65)); // se ejecuta la funcion makeDojo con los parametros "Chicago" y 65
console.log(makeDojo("Berkeley", 0)); // se ejecuta la funcion makeDojo con los parametros "Berkeley" y 0
function makeDojo(name, students) {
    const dojo = {}; // se declara la variable dojo como un objeto const vacio
    dojo.name = name; // esto dara un error por que no se puede asignar un valor a una constante
    dojo.students = students; // esto dara un error por que no se puede asignar un valor a una constante
    if (dojo.students > 50) {
        // se evalua la condicion si dojo.students es mayor a 50 esto dara un error por que no se puede asignar un valor a una constante por lo tanto dojo.students no tiene un valor
        dojo.hiring = true; // esto dara un error por que no se puede asignar un valor a una constante
    } else if (dojo.students <= 0) {
        // se evalua la condicion si dojo.students es menor o igual a 0 esto dara un error por que no se puede asignar un valor a una constante por lo tanto dojo.students no tiene un valor
        dojo = "closed for now"; // esto dara un error por que no se puede asignar un valor a una constante
    }
    return dojo; // esto nunca se va a ejecutar debido a que las lineas anteriores dan un error
}
