/* 
! Case Sensitive
* busca por Tag: getElementByTagNam()
* busca por Id: getElementById()
* busca por Nome: getElementByName()
* busca por Classe: getElementByClassName()
* busca por Seletor: querySelector()
TODO let é variavel
! "nome" é o nome da variavel, por não ser tipada não precisa declarar o tipo dela
*/
/*
! variaveis globais:
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

/* 
! if (email.value.indexOf('@') == -1) 
* nessa linha de código estamos verificando se o email possui
* @, o indexOf retorna -1 em caso negativo
* e 1 em caso positivo
*/

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

/*
!     txtAssunto.style.display = "block"
!    } else {
!        txtAssunto.style.display = "none"
!    }
* essa linha de código está apagando a div quando o usuário não
* atingir o limite de caracteres.
*/

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100 ) {
        txtAssunto.innerHTML = 'O Texto atingiu o limite de 100 caracteres'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formuário enviado com sucesso!')
    } else {
        alert (' Preencha todos os campos corretamente antes de enviar!')
    }
}

function mapaZoom(){
    mapa.style.width = "1200px"
    mapa.style.height = "550px"
}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}