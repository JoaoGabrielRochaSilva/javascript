var bot = document.getElementById('botao')
bot.addEventListener('click', clicou)
var selct = document.getElementById('sel')

function clicou() {
   var num = document.getElementById('num')
   var num2 = 0

   if (num.value.length == 0) {
    alert('Por favor digite um número!!!')
   } else {
      var num = Number(num.value)
      selct.innerHTML = ``

      for (num2;num2 <= 10;num2 ++) {
         var num3 = num * num2
         selct.innerHTML += (`<option value="${num2}">${num} x ${num2} = ${num3} </option>`)

      }
   }
}