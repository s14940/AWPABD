function validateForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const telefonInput = document.getElementById('telefon');
    const errorsSummary = document.getElementById('errorsSummary');
}
resetErrors([firstNameInput, lastNameInput, emailInput,loginInput,passwordInput,telefonInput], [errorFirstName, errorLastName, errorEmail,errorLogin,errorPassword,errorTelefon], errorsSummary);

let valid = true;

if (!checkRequired(firstNameInput.value)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole jest wymagane";
} else if (!checkTextLengthRange(firstNameInput.value, 2, 100)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
}

if (!checkRequired(lastNameInput.value)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole jest wymagane";
} else if (!checkTextLengthRange(lastNameInput.value, 2, 100)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
}   
if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole jest wymagane";
} else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
} else if (!checkEmail(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
}