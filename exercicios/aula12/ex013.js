var h = new Date()
var hora = h.getHours()
console.log(`São ${hora} horas.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom Dia!')
} else if(hora < 18 && hora >= 12) {
    console.log('Boa Tarde!')
} else if(hora <= 24 && hora >=18) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}