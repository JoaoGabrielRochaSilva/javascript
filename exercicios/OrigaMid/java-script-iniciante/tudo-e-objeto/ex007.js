var nome = 'João Gabriel'
console.log()
nome.length //12
nome.charAt(0) //'J'
nome.includes('ã') //true

var btn = document.querySelector('.bot')
//btn.appendChild
//btn.setAttribute
//btn.innerHTML
//btn.outerHTML
//btn.id

btn.addEventListener('click', function() {
    console.log('Clicou')
})
btn.addEventListener('mouseenter', function() {
    console.log('Entrou')
})
btn.addEventListener('mouseout', function() {
    console.log('Saiu')
})


