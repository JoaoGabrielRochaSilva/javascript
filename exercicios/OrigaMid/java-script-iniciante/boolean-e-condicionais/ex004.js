var minhaIdade = 17;
var parenteIdade = 35;

if(minhaIdade > parenteIdade) {
    console.log('É maior')
} else if(minhaIdade < parenteIdade) {
    console.log('É menor')
} else {
    console.log('É igual')
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 1);
console.log(expressao)

var nome = 'João';
var minhaIdade = 17;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!minhaIdade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

var brasil = 207e6;
var china = 1340e6;

if(brasil == china) {
    console.log('É igual')
} else if (brasil > china) {
    console.log('Brasil tem mais populção')
} else {
    console.log('China tem mais populção')
}

if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')
} else {
    console.log('Falso')
}