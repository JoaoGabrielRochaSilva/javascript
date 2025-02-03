var bot1 = document.getElementById('botao1')
var bot2 = document.getElementById('botao2')
var bot3 = document.getElementById('botao3')

var numerotxt = document.getElementById('num')
var resultado = document.getElementById('res')
var tabel = document.getElementById('tabela')

bot1.addEventListener('click', adicionar)
bot2.addEventListener('click', finalizar)
bot3.addEventListener('click', limpar)

var num = []

function eNumero(n) {
    if(n >= 1 && n <= 100) {
        return false
    } else {
        return true
    }
}

function estaNalista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    var numero = Number(numerotxt.value)

    if (eNumero(numero) || estaNalista(numero, num)) {
        alert('Valor invalido ou já encontrado na lista!!!')
    } else {
        num.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        tabel.appendChild(item)
        resultado.innerHTML = ''
    }
    numerotxt.value = ''
    numerotxt.focus()
}

function finalizar() {
    if (num.length == 0) {
        alert('Por Favor adicione valores!')
    } else {
        let maior = num[0]
        let menor = num[0]
        let soma = 0 

        for (let pos in num) {
            soma += num[pos]
            if (num[pos] > maior) {
                maior = num[pos]
            }
            if (num[pos] < menor) {
                menor = num[pos]
            }
        }
        
        let media = soma / num.length
        media = media.toLocaleString('pt-BR')

        resultado.innerHTML = (`<p>Ao todo temos ${num.length} números cadastrados</p> <p>O maior valor é ${maior}</p> <p>O menor valor é ${menor}</p> <p>A soma dos valores é ${soma}</p> <p>A média dos valores é ${media}</p> `)
    }
}

function limpar() {
    resultado.innerHTML = ''
    tabel.innerHTML = ''
    num = []
    numerotxt.value = ''
}
