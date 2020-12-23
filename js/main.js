function showHideBlock(){
    let block = document.getElementById('showHide')

    if(block.style.display === "none"){
        block.style.display = "block"
    }else{
        block.style.display = "none"
    }
}

function reloadGame(){
    document.location.reload()
}

let secretNumber = Math.floor(Math.random() * 100)
console.log(" le nombre (ou chiffre) aléatoire = " + secretNumber)

let afficheNbrAleatoire = document.getElementById('generate-number')
afficheNbrAleatoire.innerHTML = secretNumber

function findSecretNumber(){
    //Ici la valeur de input
    let userResponse = document.getElementById('user-number').value
    //Ici l'indice pour trouver le nombre secret
    let getIndice = document.getElementById('indices')


    if(userResponse == secretNumber){
        getIndice.innerHTML = '<h2 class="alert-success">BONNE RÉPONSE</h2>'
    }else if(userResponse > secretNumber){
        getIndice.innerHTML = '<h2 class="alert-danger">PLUS BAS</h2>'
    }else{
        getIndice.innerHTML = '<h2 class="alert-danger">PLUS HAUT</h2>'
    }

    console.log("Votre reponse " + userResponse)
    console.log("Votre indice " + getIndice)
   
}

/*****************************QUIZZ *****************/
function quizzRandom(){
    let tableauQuestion = ["Quel balise html fait des paragraphe ?", "Quel est la capitale de la France ?", "Quel est la capitale de l'Italie ?", "Quel le nom de la marque a la pommme ?"]
    let displayQuestion = document.getElementById('question')

    let score = 0
    let numberQuetion = 4

    score++
    numberQuetion--
    if(numberQuetion == 0){
        alert("Merci d'avoir jour, votre score est de : " + score)
    }

    let randomQuestion = tableauQuestion[Math.floor(Math.random() * tableauQuestion.length)]
    displayQuestion.innerHTML = randomQuestion   
    console.log(randomQuestion)

    if(randomQuestion == tableauQuestion[0]){
        let reponseQuestion1 = ["p", "h1", "html", "div"]

        let btnReponse1 = document.getElementById('reponse1')
        let btnReponse2 = document.getElementById('reponse2')
        let btnReponse3 = document.getElementById('reponse3')
        let btnReponse4 = document.getElementById('reponse4')

        btnReponse1.innerHTML = reponseQuestion1[0]
        btnReponse2.innerHTML = reponseQuestion1[1]
        btnReponse3.innerHTML = reponseQuestion1[2]
        btnReponse4.innerHTML = reponseQuestion1[3]

        btnReponse1.addEventListener('click', function(){
            alert('BONNE REPONSE')
        })

    }else if(randomQuestion == tableauQuestion[1]){
        let reponseQuestion1 = ["Moscou", "Marseille", "Paris", "Madrid"]

        let btnReponse1 = document.getElementById('reponse1')
        let btnReponse2 = document.getElementById('reponse2')
        let btnReponse3 = document.getElementById('reponse3')
        let btnReponse4 = document.getElementById('reponse4')

        btnReponse1.innerHTML = reponseQuestion1[0]
        btnReponse2.innerHTML = reponseQuestion1[1]
        btnReponse3.innerHTML = reponseQuestion1[2]
        btnReponse4.innerHTML = reponseQuestion1[3]

        btnReponse3.addEventListener('click', function(){
            alert('BONNE REPONSE')
        })
    }
    
}

