var bot = document.getElementsByClassName('botao')[0]
var resultado = document.getElementsByClassName('res')[0]
bot.addEventListener('click', clicou)

function clicou() {
   var nomeAluno = prompt('Qual é o nome do aluno:')
   var nota1 = prompt(`Primeira nota de ${nomeAluno}:`)
   var nota2 = prompt(`Segunda nota de ${nomeAluno}:`)

   if (nomeAluno.length == 0 || nota1.length == 0 || nota2.length == 0) {
        alert('Por Favor digite os dados pedidos')

   } else {
        var nota1 = Number(nota1)
        var nota2 = Number(nota2)
        var media = (nota1 + nota2) / 2

        var nota1txt = nota1.toLocaleString('pt-BR')
        var nota2txt = nota2.toLocaleString('pt-BR')
        var mediatxt = media.toLocaleString('pt-BR')
        
        resultado.innerHTML = (`<h2>Analisando a Situação de ${nomeAluno}</h2> <p>Com as notas ${nota1txt} e ${nota2txt} a <strong>média é ${mediatxt}</strong></p>`)

        if (nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0) {
            alert('A nota vai de 0 a 10 verifique os valores!')
            resultado.innerHTML = ('<p>Clique no botão acima para informar as <strong>notas do aluno</strong>.</p>')

        } else if (media < 3) { 
            resultado.innerHTML +=  ('<p>Com a media abaixo de 3,0 o aluno está <mark><strong>REPROVADO</strong></mark></p>')
            //Estilo do marca texto:
            let mark = document.getElementsByTagName('mark')[0]
            mark.style.background = 'lightcoral'
            mark.style.color = 'darkred'

        } else if (media >= 3 && media <= 6) {
            resultado.innerHTML += ('<p>Com a media entre 3,0 e 6,0 o aluno está de <mark><strong>RECUPERAÇÃO</strong></mark></p>')
             //Estilo do marca texto:
             let mark = document.getElementsByTagName('mark')[0]
             mark.style.background = 'transparent'
             mark.style.color = 'gold'

        } else if (media > 6) {
            resultado.innerHTML += ('<p>Com a media acima de 6,0 o aluno está <mark><strong>APROVADO</strong></mark></p>')
             //Estilo do marca texto:
             let mark = document.getElementsByTagName('mark')[0]
             mark.style.background = 'lightgreen'
             mark.style.color = 'green'

        } else {
            alert("Por Favor digite somente números ou utilize '.' (ponto) no lugar de ',' (virgula)")
            resultado.innerHTML = ('<p>Clique no botão acima para informar as <strong>notas do aluno</strong>.</p>')
        }

   }
  
}
