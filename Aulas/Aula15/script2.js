let val = [5,4,1,7,3]
/*for(let pos=0;pos<val.length;pos++){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}*/
for(let pos in val){
    console.log(`a posição ${pos} tem o valor ${val[pos]}`)
}