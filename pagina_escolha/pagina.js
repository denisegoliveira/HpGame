
function escolherPersonagem(nomePersonagem) {

var quiz = prompt('Digite 1 para continuar \n Digite 2 para escolher outro personagem');

if (nomePersonagem == "Neville" && quiz == 1) {
    return location = '../grifinoria/grifi_p1/p1.html'
} else if (nomePersonagem == "Luna" && quiz == 1) {
   return location = '../cornival/corni_p1/corni_p1.html'
} else if (nomePersonagem == "Cedrico" && quiz == 1) {
    return location = '../lufalufa/lufa_p1/lufa_p1.html'
} else if (nomePersonagem == "Draco" && quiz == 1) {
    return location = '../sanserina/sonse_p1/sonse_p1.html'
} else {
    return location = './index.html'
}
}
