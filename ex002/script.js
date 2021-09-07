function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[erro]')
    }
    else {
        let fSex = document.getElementsByTagName('radsex')
        let idade = ano * Number(fAno.value)
        let genero = ''
        if (fSex[0].checked) {
            genero = 'Homem'
        }
        else if (fSex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}
