function verificar() {
    var ano = document.getElementById('ano')
    var ano = Number(ano.value)
    var agora = new Date()
    var agora = agora.getFullYear()
    var idade = agora - ano
    var sex = document.getElementsByName('sexo')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    var genero = ''

    if (ano == 0 || ano > agora) {
        alert('[ERRO] verifique os dados')
    } else {
        if(sex[0].checked) {
        var genero = 'Homem'
        } if (idade < 13) {
        img.setAttribute('src', 'menino.png')
       } else if (idade <= 25) {
        img.setAttribute('src', 'homejovem.png')
       } else if (idade <= 50) {
        img.setAttribute('src' , 'homem.png')
       } else {
        img.setAttribute('src', 'homemidoso.png')
       }

    } if(sex[1].checked){
        var genero = 'Mulher'
        if (idade < 13) {
        img.setAttribute('src', 'menina.png')
       } else if (idade <= 25) {
        img.setAttribute('src', 'mulherjovem.png')
       } else if (idade <= 50) {
        img.setAttribute('src' , 'mulher.png')
       } else {
        img.setAttribute('src', 'mulheridosa.png')
       }
    }
   
    res.style.textAlign = 'center'
    res.innerHTML = (`Você é ${genero}, com ${idade} anos de idade`)
    res.appendChild(img)
    
}