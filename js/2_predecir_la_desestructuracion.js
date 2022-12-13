// Problema 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // eso retornara el valor de la primera posicion del arreglo que es Tesla
console.log(otherRandomCar); // eso retornara el valor de la segunda posicion del arreglo que es Mercedes

console.log("-------------------------");

// Problema 2
const employee = {
    name: "Elon",
    age: 47,
    company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); // eso retornara un error debido a que la variable name no ha sido declarada en su lugar se debe usar otherName
console.log(otherName); // eso retornara el valor de la propiedad name del objeto employee que es Elon

console.log("-------------------------");

// Problema 3
const person = {
    name: "Phil Smith",
    age: 47,
    height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // eso retornara el valor de la variable password que es 12345
console.log(hashedPassword); // eso retornara undefined debido a que la propiedad password no existe en el objeto person

console.log("-------------------------");

// Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; // se declara la variable first y se le asigna el valor de la segunda posicion del arreglo que es 2
const [, , , second] = numbers; // se declara la variable second y se le asigna el valor de la cuarta posicion del arreglo que es 5
const [, , , , , , , , third] = numbers; // se declara la variable third y se le asigna el valor de la novena posicion del arreglo que es 2
//Predict the output
console.log(first == second); // eso retornara false debido a que la variable first tiene el valor 2 y la variable second tiene el valor 5
console.log(first == third); // eso retornara true debido a que la variable first tiene el valor 2 y la variable third tiene el valor 2

console.log("-------------------------");

// Problema 5
const lastTest = {
    key: "value",
    secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest; // se declara la variable key y se le asigna el valor de la propiedad key del objeto lastTest que es value
const { secondKey } = lastTest; // se declara la variable secondKey y se le asigna el valor de la propiedad secondKey del objeto lastTest que es [1, 5, 1, 8, 3, 3]
const [, willThisWork] = secondKey; // se declara la variable willThisWork y se le asigna el valor de la segunda posicion del arreglo secondKey que es 5
//Predict the output
console.log(key); // eso retornara el valor de la variable key que es value
console.log(secondKey); // eso retornara el valor de la variable secondKey que es [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // eso retornara el valor de la primera posicion del arreglo secondKey que es 1
console.log(willThisWork); // eso retornara el valor de la variable willThisWork que es 5
