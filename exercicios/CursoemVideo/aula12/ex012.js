var idade = 20
console.log(`Sua idade é ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if(idade < 18 || idade >= 67) {
    console.log('Voto opicional')
} else {
    console.log('Voto obrigatório')
}