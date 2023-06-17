function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12){
        img.src = 'imagens/foto-manha.jpg'
        //foto.innerHTML += 'Bom Dia!'
        document.body.style.background = 'lightgray'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/foto-tarde.jpg'
        //foto.innerHTML += 'Boa Tarde!'
        document.body.style.background = 'lightblue'
    } else{
        img.src = 'imagens/foto-noite.jpg'
        //foto.innerHTML += 'Boa Noite!'
        document.body.style.background = '#552369'
    }
}