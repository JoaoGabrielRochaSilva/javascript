function parimpar(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(7)
console.log(res)
console.log(parimpar(3))