var num = [1,2,3,4,5]

//console.log(num)

/*
console.log(`${num[0]}`)
console.log(`${num[1]}`)
console.log(`${num[2]}`)
console.log(`${num[3]}`)
console.log(`${num[4]}`)

for (let pos = 0;pos < num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //Forma simplificada.