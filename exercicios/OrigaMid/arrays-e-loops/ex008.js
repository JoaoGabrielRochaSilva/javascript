var anosCopaBrasil = [1959, 1962, 1970, 1994, 2002]

anosCopaBrasil.forEach(function(item) {
    console.log(`O Brasil  ganhou a copa de ${item}`)
})

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância', 'Morango']

for(let fruta = 0; fruta <= frutas.length; fruta++) {
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera') {
        break
    }
}

var ultimaFruta = frutas[frutas.length - 1]

console.log(ultimaFruta, frutas)

