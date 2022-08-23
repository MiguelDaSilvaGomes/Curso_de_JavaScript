function verificar() {
    var data = new Date()
    var ano = data.setFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.lenght == 0 || fAno.value > ano){
        window.alert('Tente Novamente com valores possiveis')
    }else{
        window.alert('Tudo okay!')
    }
}