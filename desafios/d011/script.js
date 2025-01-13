var bot = document.getElementById('botao')
bot.addEventListener('click', clicou)
var res = document.getElementById('res')

function clicou() {
   var ano = prompt('Qual ano que você quer verificar?')
   var ano = Number(ano)

   // Verifica se o ano é divisivel por 4 ou 400
   if (ano % 4 == 0 && ano % 100 != 0  || ano % 400 == 0 && ano % 100 == 0) {
    res.innerHTML = (`<h2>Analisando o ano de ${ano}...</h2> O ano de ${ano} <mark class="mark"><strong>É BISSEXTO</strong></mark> \u{2705}`)

    let mark = document.getElementsByClassName('mark')[0]
    mark.style.background = 'lightgreen'
    mark.style.color = 'green'

   } else {
    res.innerHTML = (`<h2>Analisando o ano de ${ano}...</h2> O ano de ${ano} <mark class="mark"><strong>NÃO É BISSEXTO</strong></mark> \u{274C}`)

    let mark = document.getElementsByClassName('mark')[0]
    mark.style.background = 'rgb(254, 163, 163)'
    mark.style.color = 'red'
   } 
}