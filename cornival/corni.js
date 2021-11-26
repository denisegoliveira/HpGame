function etapasCornival1(opcao) {
    
    var validaEscolha = false;

    while(validaEscolha == false) {
    var confirmacao = prompt("Para confirmar sua resposta digite 1")

    if (opcao == 1 && confirmacao == 1) {
        validaEscolha = true
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        validaEscolha = true
        return location = '../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        validaEscolha = true
        return location = '../corni_p2/corni_p2.html'
    } else {
        alert ("Você não confirmou sua resposta")
    }
}
}

function etapasCornival2(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../corni_p3/corni_p3.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './corni_p1/corni_p1.html'
    }
}

function etapasCornival3(opcao) {
    var confirmacao = prompt("Para confirmar sua resposta digite\n1 para sim\n2 para não")

    if (opcao == 1 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else if (opcao == 2 && confirmacao == 1) {
        return location = '../../final/final.html'
    } else if (opcao == 3 && confirmacao == 1) {
        return location = '../../game_over/gameover.html'
    } else {
        alert ("Você não confirmou sua resposta")
        return location = './corni_p1/corni_p1.html'
    }
}