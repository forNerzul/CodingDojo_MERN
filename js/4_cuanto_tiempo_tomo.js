/* Calcular numeros primos */
/* Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}; */

Number.prototype.isPrime = function () {
    for (let i = 2, raiz = Math.sqrt(this); i <= raiz; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

const { performance } = require("perf_hooks");
const start1 = performance.now();
let primeCount1 = 0;
let num1 = 2; // por razones matemáticas, 1 se considera primo
while (primeCount1 < 10000) {
    if (num1.isPrime()) {
        primeCount1++;
    }
    num1++;
}
console.log(`The 10,000th prime number is ${num1 - 1}`);
console.log(`This took ${performance.now() - start1} milliseconds to run`);

const { performance } = require("perf_hooks");
const start2 = performance.now();
let primeCount2 = 0;
let num2 = 2; // por razones matemáticas, 1 se considera primo
while (primeCount2 < 100000) {
    if (num2.isPrime()) {
        primeCount2++;
    }
    num2++;
}
console.log(`The 100,000th prime number is ${num2 - 1}`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);

const { performance } = require("perf_hooks");
const start3 = performance.now();
let primeCount3 = 0;
let num3 = 2; // por razones matemáticas, 1 se considera primo
while (primeCount3 < 1000000) {
    if (num3.isPrime()) {
        primeCount3++;
    }
    num3++;
}
console.log(`The 1,000,000th prime number is ${num3 - 1}`);
console.log(`This took ${performance.now() - start3} milliseconds to run`);

/* Fibonacci */

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);

// la funcion rFib es mucho mas lenta que la funcion iFib porque la funcion rFib tiene que hacer mas llamadas recursivas

/* Invertir una cadena de texto */

const story =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join(""); // split divide la cadena en un array, reverse invierte el array y join une el array en una cadena
const reversed2 = [...story].reverse().join(""); // esto es lo mismo que la linea anterior pero con spread operator lo cual es mas rapido al no tener que crear un array nuevo
