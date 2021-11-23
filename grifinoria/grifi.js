function etapasGrifinoria1(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../grifi_p2/p2.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './grifi_p1/p1.html'
    }
}

function etapasGrifinoria2(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../grifi_p3/p3.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './grifi_p2/p2.html'
    }
}

function etapasGrifinoria3(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../final/final.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './grifi_p3/p3.html'
    }
}