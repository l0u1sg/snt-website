function alertForm() {
    window.alert("🎉 Bravo, vous avez cliqué")
}

function goPlay() {
    let points = 0
    window.alert("Bon, c'est leur de voir si vous avez bien retenu les informations dans la page index.html")
    window.confirm("Etes vous pret ?")
    let rp1 = window.prompt("Quels sont mes languages de programmation favoris. " + "1- JavaScript, Java, HTML5" + "  2- JavaScript, HTML, NodeJS" + "  3- HTML, CSS, Python", "Répondre par 1, 2 ou 3")
    if (rp1 == 2) {
        points = points + 1
        window.alert("🎉 Bravo, vous avez bien répondu à la question. Mais le quizz n'est pas encore fini")
    } else {
        window.alert("Vous avez mal répondu. Dommage")
    }
    let rp2 = window.prompt("Bon allez, on va faire simple : comment je m'appelle ?", "Indice : Je porte le nom d'un roi 🤴")
    if (rp2 == "Louis" || rp2== "louis") {
        points = points + 1
        window.alert("🎉 Bravo, vous avez bien répondu à la question. Mais le quizz n'est pas encore fini..." + " Au fait, vous avez " + points +" points")
    } else {
        window.alert("Vous avez mal répondu. Dommage")
    }
    let rp3 = window.prompt("Allez, c'est parti pour la dernière question. Un peu de culture technologique maintenant... Quelle est l'année de la mort de Flash Player ?")
    if (rp3 == 2021) {
        points = points + 1
        window.alert("🎉 Bravo, vous avez bien répondu à la question.")
    } else {
        window.alert("Vous avez mal répondu. Dommage")
    }
    window.alert("C'est bon... C'était dur hein ? Maintenant on va faire les points ")
    if (points == 3) {
        window.alert("Félicitation, vous avez " + points +" points. Vous avez gagné ma reconaissance !")
    } else if (points == 2) {
        window.alert("Allez, on ne lache rien, vous êtes presque parfait. Vous avez " + points + " points. Vous avez gagné ma reconaissance !")
    } else if (points == 1) {
        window.alert("Mince alors, vous avez loupé  deux questions... Mais c'est pas grave")
    } else {
        window.alert("Dommage, tout est faux. ")
    }


} 