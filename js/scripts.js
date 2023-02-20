const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");


form.addEventListener("submit",(e) =>{
    e.preventDefault();

    // verifica nome vazio
    if(nameInput.value === ""){
        showModal("Por favor preencha seu nome!");
        return;
    }

    // verifica se o email esta correto
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        showModal("Por favor, preencha seu email!");
        return;
    }

    // verificar se a senha esta correta
    if(!validatePassword(passwordInput.value, 8)){
        showModal("Por favor, senha precisa ter no minimo 8 digitos!");
        return;
    }

    // verificar situação foi selecionada
    if(jobSelect.value === ""){
        showModal("Por favor, selecione sua situação!");
        return;
    }

    // verifica se a messagem esta preenchida
    if(messageTextarea.value === ""){
        showModal("Por favor, preencha sua mensagem!");
        return;
    }

    // se os campos estiverem corretamente preenchido, envie o form.
    form.submit();
})

// Função que valida email
function isEmailValid(email){

    // cria uma regex para validar email
    const emailRegex = new RegExp(

        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ 
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}


// Função que valida senha
function validatePassword(){
    if(password.length >= minDigits){
        return true;
    }
    return false;
}

// Exibir modal
function showModal(msg){
    modalMessage.textContent = msg;
    modal.style.display = "block";
}

// Fechar modal
closeButton.addEventListener("click", (e) =>{
    modal.style.display = "none";
});

window.addEventListener("click", (e) =>{
    if(e.target === modal){
        modal.style.display = "none";
    }
})