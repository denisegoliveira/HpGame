function etapasLufaLufa1(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../lufa_p2/lufa_p2.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './lufa_p1/lufa_p1.html'
    }
}

function etapasLufaLufa2(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../lufa_p3/lufa_p3.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './lufa_p2/lufa_p2.html'
    }
}

function etapasLufaLufa3(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../../final/final.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './lufa_p3/lufa_p3.html'
    }
}