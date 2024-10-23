let amigo = {nome: 'José',
sexo: 'M',
peso: '100',
hipertrofia(r=0) {
    console.log('Ganhou massa muscular')
    this.peso += r
}}
amigo.hipertrofia(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)