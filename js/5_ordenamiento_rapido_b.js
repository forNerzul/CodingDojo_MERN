let arr = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];

function ordenamientoRapido(arr, lo, hi) {
    if (lo >= 0 && hi >= 0 && lo < hi) {
        const p = particion(arr, lo, hi);
        ordenamientoRapido(arr, lo, p);
        ordenamientoRapido(arr, p + 1, hi);
    }
}

function particion(arr, lo, hi) {
    const pivot = arr[Math.floor((lo + hi) / 2)];
    let i = lo - 1;
    let j = hi + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j){
            return j;
        }

        intercambio(arr, i, j);
    }
}

function intercambio(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

ordenamientoRapido(arr, 0, arr.length - 1);

console.log(arr);