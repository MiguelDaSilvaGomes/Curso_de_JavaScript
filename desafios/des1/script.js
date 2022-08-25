function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('Imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        foto.src = 'FotosManhaPeq.jpg'
        document.body.style.background = "#e2cd9f"
        document.body.style.color = 'black'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!    
        foto.src = 'FotosPeq.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        foto.src = 'FotoNoitePeq.jpg'
        document.body.style.background = '#13136'
    }

}

