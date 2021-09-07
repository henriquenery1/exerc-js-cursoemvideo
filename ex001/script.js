function carregar () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let foto = document.getElementById('foto')
    let sect = document.getElementById('sec')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 5 && hora < 12) {
        //bom dia
        foto.innerHTML= `Está de manhã`
        sect.style.backgroundColor ='yellow'
    }
    else if (hora > 12 && hora < 18) {
        //boa tarde
        foto.innerHTML= `Está de tarde`
        sect.style.backgroundColor ='orange'
    }
    else {
        //boa noite
        foto.innerHTML= `Está de noite`
        sect.style.backgroundColor ='darkblue'
    }
}

