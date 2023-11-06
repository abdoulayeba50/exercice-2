const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit',(e) => {
   e.preventDefault();

   checkInputs();
});

function checkInputs(){
    // Récupérer la valeur des inputs
    const usernameValue= username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value =  password2.value.trim();

    console.log("Username Value:", usernameValue);
    console.log("Email Value:", emailValue);
    console.log("Password Value:", passwordValue);
    console.log("Password2 Value:", password2Value);

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue ===''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid'); 
    }
    else {
        setSuccessFor(email);
    }
    
    if(passwordValue === ''){
        setErrorFor(password, 'Username cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if(password2Value === ''){
        setErrorFor(password2, 'Username cannot be blank');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match');
    }
    else {
        setSuccessFor(password2);
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    // Expression régulière pour valider l'adresse email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

