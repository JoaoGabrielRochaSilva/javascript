let Eu = {
nome:'João Gabriel',
sexo:'M',
idade:17,
envelheceu:10,
envelhecer(envelheceu=0){
    console.log(`Envelheceu ${Eu.envelheceu} anos`)
    this.idade += envelheceu
}}

console.log(`${Eu.nome} tem o sexo ${Eu.sexo} e tem ${Eu.idade} anos`)

Eu.envelhecer(Eu.envelheceu)
console.log(`${Eu.nome} agora tem ${Eu.idade} anos.`)