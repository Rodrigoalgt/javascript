let num = [5, 8, 9, 4, 3]



/*
console.log(num)
for (pos=0; pos <= num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(8)
console.log(`O número 8 está na posição ${pos}`)