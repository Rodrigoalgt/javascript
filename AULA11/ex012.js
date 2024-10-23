var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Good Morning!')
} else if (hora < 18) {
    console.log('Good Afternoon!')
} else {
    console.log('Good ivine!')
}