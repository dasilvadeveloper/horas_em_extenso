function tempoEmPalavras(h, m) {

    if (h == 0 && m == 0) return "meia noite"
    if (h == 12 && m == 0) return "meio dia"

    let horaPorExtenso = ""
    let horaEmExtenso = ""

    let horasEmExtenso = [
        "meia noite",
        "uma",
        "duas",
        "três",
        "quarto",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze",
        "meio dia",
        "uma",
        "duas",
        "três",
        "quarto",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze"

    ]

    let minutosEmExtenso = [
        " em ponto",
        " e um",
        " e dois",
        " e três",
        " e quarto",
        " e cinco",
        " e seis",
        " e sete",
        " e oito",
        " e nove",
        " e dez",
        " e onze",
        " e doze",
        " e treze",
        " e quatorze",
        " e um quarto",
        " e dezasseis",
        " e dezassete",
        " e dezoito",
        " e dezanove",
        " e vinte",
        " e vinte e um",
        " e vinte e dois",
        " e vinte e três",
        " e vinte e quatro",
        " e vinte e cinco",
        " e vinte e seis",
        " e vinte e sete",
        " e vinte e oito",
        " e vinte e nove",
        " e meia",
    ]

    if (m > 30 && m != 45) {
        return minutosEmExtenso[(60 - m)].substring(3) + " para " + ((Number.parseInt(h) + 1) == 24 ? "a meia noite" : Number.parseInt(h + 1) == 12 ? "o meio dia" : "as " + horasEmExtenso[h + 1])
    } else if (m == 45) {
        return "um quarto para " + ((Number.parseInt(h) + 1) == 24 ? "a meia noite" : Number.parseInt(h + 1) == 12 ? "o meio dia" : "as " + horasEmExtenso[h + 1])
    } else {
        return horasEmExtenso[h] + minutosEmExtenso[m]
    }

}

    console.log(tempoEmPalavras(12, 15))
