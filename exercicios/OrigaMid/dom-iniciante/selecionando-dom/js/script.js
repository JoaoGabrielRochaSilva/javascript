const todasImagens = document.querySelectorAll('img')

todasImagens.forEach(function(imagem, index){
    console.log(imagem,index)
})

const imagens = document.querySelectorAll('img[src^="img/l"]')

imagens.forEach(function(item) {
    console.log(item)
})

const linksInternos  = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)

const primeiroH2 = document.querySelector('.Animais-descrição h2') 
console.log(primeiroH2)

const ultimoP = document.querySelectorAll('p')

console.log(ultimoP[--ultimoP.length])