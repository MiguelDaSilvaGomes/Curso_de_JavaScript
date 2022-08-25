var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade <= 16){
    console.log('não Vota')
}
else if (idade < 18 || idade > 70){
        console.log('Voto opcional')
} else{
    console.log('Voto Obrigatorio')
}
