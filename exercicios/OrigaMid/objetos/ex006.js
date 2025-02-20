var eu = {
    nome: 'João Gabriel',
    sobrenome: 'Rocha Silva',
    idade: 17,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(eu.nomeCompleto())

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
console.log(carro.preco)
carro.preco = 3000
console.log(carro.preco)

var cachorro = {
    raça: 'Labrador',
    cor: '#000', //Preto
    idade: 10, //Anos
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'AUAUAUAU'
        } else {
            return 'Não latir'
        }
    }
}

console.log(cachorro.latir('homem'))