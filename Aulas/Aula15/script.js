let num = [9,5,8,2,1]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`A posição do valor 9 é ${pos}`)
}
