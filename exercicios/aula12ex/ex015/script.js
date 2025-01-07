function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()
   
    msg.innerText = (`Agora são ${hora} horas. `)
    
    if (hora < 12 && hora >= 0) {
        msg.innerText += 'Bom-Dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#fdce74'
    } else if (hora >= 12 && hora < 18) {
        msg.innerText += 'Boa-Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = 'linear-gradient(to bottom, #fe846b, #e671ad)'
    } else {
        msg.innerText += 'Boa-Noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#0061a0'
    }
}