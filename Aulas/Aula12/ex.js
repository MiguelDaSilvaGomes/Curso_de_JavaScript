var agora = new Date()
var diaSem = agora.getDay()
/*
      domingo-0
      segunda-1
      terça-2
      quarta-3
      quita-4
      sexta-5
      sabado-6
*/
switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Fera')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabado')
        break
}