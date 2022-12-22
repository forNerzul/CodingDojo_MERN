var arr = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];

console.log("Arreglo: " + arr);

function generarPivoteRandom(max) {
    let rand = Math.random() * max;
    rand = Math.floor(rand);
    return rand;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // Elegir pivote random
    let pivote = generarPivoteRandom(arr.length);
    console.log("Pivote: " + arr[pivote]);
    let izq = [];
    let der = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == pivote) {
            continue;
        }
        if (arr[i] < arr[pivote]) {
            izq.push(arr[i]);
        } else {
            der.push(arr[i]);
        }
    }

    return [].concat(quickSort(izq), arr[pivote], quickSort(der));
}

console.log("Concatenado final " + quickSort(arr));
