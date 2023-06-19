function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! Preencha o campo: "Ano de Nascimento"')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 55){
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 55){
                //Adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
    }
}