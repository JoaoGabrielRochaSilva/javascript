var bot = document.getElementById('botao')
bot.addEventListener('click', clicou)
var res = document.getElementById('res')

function clicou() {
    var Pant = prompt('Qual era o preço anterior do produto?')
    var Patual = prompt('Qual é o preço atual do produto?')
    var ant = Number(Pant)
    var atual = Number(Patual)
    var sub = Math.abs(atual - ant)
    var subp = sub / ant * 100

//Verifica se foi digitado algum valor:
    if (Pant.length == 0 || Patual.length == 0 || ant == 0 && atual == 0) { 
        alert('Por Favor digite algum valor!')
//Verifica se os valores digitados são positivos
    } else if (ant < 0 || atual < 0) {
        alert('Por Favor digite valores positivos!')
//Verfica se o preço aumentou:
    } else if (atual > ant) {
        var subp = subp.toLocaleString('pt-BR')
        var ant = ant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        var atual = atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        var sub = sub.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        res.innerHTML = (`<h2>Analisando os valores informados</h2> <p>O produto custava <strong>${ant}</strong> e agora custa <strong>${atual}</strong>.</p><p>Hoje o produto está <strong>mais caro.</strong></p> <p>O preço subiu <strong>${sub}</strong> em relação ao preço anterior.</p> <p>Uma variação de <strong>${subp}%</strong> pra cima.</p>`)
//Verifica se o preço abaixou:
    } else if (atual < ant){
        var subp = subp.toLocaleString('pt-BR')
        var ant = ant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        var atual = atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        var sub = sub.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        res.innerHTML = (`<h2>Analisando os valores informados</h2> <p>O produto custava <strong>${ant}</strong> e agora custa <strong>${atual}</strong>.</p><p>Hoje o produto está <strong>mais barato.</strong></p> <p>O preço desceu <strong>${sub}</strong> em relação ao preço anterior.</p> <p>Uma variação de <strong>${subp}%</strong> pra baixo.</p>`)
//Preço não sofreu nenhuma alterção:
    } else {
        var ant = ant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        var atual = atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        res.innerHTML = (`<h2>Analisando os valores informados</h2> <p>O produto custava <strong>${ant}</strong> e agora custa <strong>${atual}</strong>.</p><p>O produto não sofreu <strong>nenhuma alteração!!!</strong></p>`)
    } 
      
}