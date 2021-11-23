function etapasSonserina1(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../sonse_p2/sonse_p2.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './sonse_p1/sonse_p1.html'
    }
}

function etapasSonserina2(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../sonse_p3/sonse_p3.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './sonse_p2/sonse_p2.html'
    }
}

function etapasSonserina3(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../final/final.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './sonse_p3/sonse_p3.html'
    }
}