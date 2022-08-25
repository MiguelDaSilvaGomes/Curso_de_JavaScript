function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
     if(fano.value.length == 0 || fano.value > ano){
        window.alert('Check os Valores e tente Novamente!')
     }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'Menino.jpg')
            }else if (idade < 21){
               //Jovem
               img.setAttribute('src', 'JovemMenino.jpg')
            }else if  (idade < 50) {
               //adulto
               img.setAttribute('src', 'Adulto.lpg')
            }else{
               //idoso
               img.setAttribute('src', 'Velinho.jpg')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Menina.jpg')
             }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemMenina.jpg')
             }else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'Adulta.jpg')
             }else{
                //idoso
                img.setAttribute('src', 'velhinha.jpg')
             }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
     }
}