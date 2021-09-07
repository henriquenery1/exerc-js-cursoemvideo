const inicio = document.querySelector('input#n1');
const fim = document.querySelector('input#fim')
const passo = document.querySelector('input#passo')
const res = document.querySelector('div#res')

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    }
    else {
        res.innerHTML = `Contando... `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        else {
            //contagem regrassiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}