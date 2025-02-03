var num = [2,6,9,1,4]

num.push(2)
num[0] = 8
num.sort()
console.log(num)
console.log(`Número de elementos: ${num.length}`)
console.log(`a primeira posição tem o valor: ${num[0]}`)

let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não existe')
} else {
    console.log(`O valor está na posição ${pos}`)

}


