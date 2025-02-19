function verificar(valor) {
    if(valor == true) {
       return true
    } else {
        return false
    }
}

console.log(verificar(5 > 0))

function perimetroQuadrado(lado) {
    return 4 * lado
}

console.log(perimetroQuadrado(5))

function nomeCompleto(nome, sobrenome) {
    return console.log(`${nome} ${sobrenome}`)
}

nomeCompleto('João Gabriel', 'Rocha Silva')

function ePar(num) {
    if(num % 2 == 0) {
        return console.log('Par')
    } else {
        return console.log('Ímpar')
    }
}

ePar(2)

function verificarTipoDado(dado) {
    return console.log(typeof dado)
}
verificarTipoDado((10 * 10 / 10))

addEventListener('scroll', function(){console.log('João Gabriel Rocha Silva')})


function paisesVisitar(paisesVisitados) {
    return `Ainda Faltam ${totalPaises - paisesVisitados} países para visitar.`
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

var totalPaises = 193

console.log(paisesVisitar(60))
console.log(jaVisitei(60))