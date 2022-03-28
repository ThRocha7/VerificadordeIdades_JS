function verificar(){
   var agr = new Date()
    var ano = agr.getFullYear()
    var res = document.getElementById('res')
    var fdata = document.getElementById('txtano')

    if (fdata.value.length == 0 || fdata.value > ano){
        window.alert('[ERRO] DATA INVALIDA')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fdata.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem' 
            if (idade >= 0  && idade < 12){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'moco.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute("src", 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0  && idade < 12){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'moca.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
    }
    res.style.textAlign= 'center'
    res.innerHTML=`Detectei ${genero} com ${idade} anos.`
    res.appendChild(img)
}