const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    // verifica nome vazio
    if(nameInput.value === ""){
        alert("Por favor preencha seu nome!");
        return;
    }

    // verifica se o email esta correto
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha seu email!");
        return;
    }

    // verificar se a senha esta correta
    if(!validatePassword(passwordInput.value, 8)){
        alert("Por favor, senha precisa ter no minimo 8 digitos!");
        return;
    }

    // verificar sotuação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione sua situação!");
        return;
    }

    // verifica se a messagem esta preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, preencha sua mensagem!");
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