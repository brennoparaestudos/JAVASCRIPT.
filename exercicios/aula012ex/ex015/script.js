function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'bebemenino.jpg')
            } else if(idade >= 10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if(idade >= 21 && idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'bebemenina.jpg')
            } else if(idade >= 10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if(idade >= 21 && idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}