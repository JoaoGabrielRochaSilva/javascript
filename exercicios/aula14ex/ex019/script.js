var bot = document.getElementById('botao')
bot.addEventListener('click', clicou)

function clicou() {
    var res = document.getElementById('res')
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if (pas.value.length == 0  || ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = (`<strong>Impossivel contar verifique os dados!!!</strong>`)
       
    } else if (p <= 0) {
        alert('Passo invalido. Contando com passo valendo: 1')
        let p = 1

        if (i >= f) {
            res.innerHTML = ('<p><strong>Contando... <br> </strong></p>')
            
            for (i;i >= f;i -= p) {
            res.innerHTML += (`${i}\u{1F449}`)
            }
    
        } else {
            res.innerHTML = ('<p><strong>Contando... <br> </strong></p>')

            while (i <= f) {
                res.innerHTML += (`${i}\u{1F449}`)
                i += p
            }
        }

        res.innerHTML += (`\u{1F3C1}`) 

    } else if (i >= f) {
    
        res.innerHTML = ('<p><strong>Contando... <br> </strong></p>')

        for (i;i >= f;i -= p) {
            res.innerHTML += (`${i}\u{1F449}`)
        }
        res.innerHTML += (`\u{1F3C1}`)
    
    } else {
        res.innerHTML = ('<p><strong>Contando... <br> </strong></p>')
        for (i;i <= f;i += p) {
            res.innerHTML += (`${i}\u{1F449}`)
        }
        res.innerHTML += (`\u{1F3C1}`)
    } 
    
}   