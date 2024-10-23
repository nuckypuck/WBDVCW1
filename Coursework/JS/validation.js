/* Declaring variables for each input & error message container */
const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')
const phone_input = document.getElementById('phone-input')
const phonePattern = /^07\d{3} \d{6}$/; // UK FORMAT 07XXX XXXXXX
const phoneNumber = phone_input ? phone_input.value : '';

/* UTILITY FUNCTIONS */
/* Allows the user to see their password */
function showPassword() {
    if (password_input.type === "password") {
        password_input.type = "text";
    } else {
        password_input.type = "password";
    }
}

/* Prevents letters from being formatted and calls function to format number */
if (phone_input) {  // Ensure phone_input exists before adding event listener
    phone_input.addEventListener('input', (e) => {
        let phoneNumber = e.target.value.replace(/\D/g, '')
        e.target.value = formatPhoneNumber(phoneNumber)
    });
}

// Formats phone number as XXXXX XXXXXX
function formatPhoneNumber(phoneNumber) {
    const part1 = phoneNumber.substring(0, 5)
    const part2 = phoneNumber.substring(5, 11)

    if (phoneNumber.length > 5) {
        return `${part1} ${part2}`;
    } else {
        return part1;
    }
}

/* CORE FUNCTIONS  */
/* Checking for user 'submit' via button or enter key for error handling */
form.addEventListener('submit', (e) => { 
    let errors = []

    if(username_input){  // If username_input exists, it's a registration form
        errors = getRegisterFormErrors(username_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{  // Otherwise, it's a login form
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    /* Account creation & Login Handling */
    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join("\n ")
    } else {
        if(username_input){
            createAccount(e)
        } else {
            loginAccount(e)  // Call the loginAccount function here
        }
    }
})

/* ERROR HANDLING */
/* Register Form Error Checker */
function getRegisterFormErrors(username, email, password, repeatPassword){
    let errors = []

    if (username === '' || username == null){
        username_input.parentElement.classList.add('incorrect')
        errors.push('Missing Username')
    }
    if (email === '' || email == null){
        email_input.parentElement.classList.add('incorrect')
        errors.push('Missing Email')
    }
    if (password === '' || password == null){
        password_input.parentElement.classList.add('incorrect')
        errors.push('Missing Password')
    }
    if (username.length > 20){
        errors.push('Username max 20 Characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.length > 20){
        errors.push('Password max 20 Characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.length < 8){
        errors.push('Password needs 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.search(/[a-z]/i) < 0 ){
        errors.push('Password needs a letter')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.search(/[0-9]/i) < 0 ){
        errors.push('Password needs a number')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.search(/[!@#\$%\^&\*]/i) < 0 ){
        errors.push('Password needs special characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword){
        errors.push('Password does not match')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    if (phoneNumber === '' || phoneNumber == null) {
        phone_input.parentElement.classList.add('incorrect')
        errors.push('Missing Phone Number')
    }
    if (phoneNumber.search(phonePattern) < 0){
        phone_input.parentElement.classList.add('incorrect')
        errors.push('Phone number format should be 07XXX XXXXXX')
    }

    return errors;
}

/* Login Form Error Checker */
function getLoginFormErrors(email, password){
    let errors = []

    if (email === '' || email == null){
        email_input.parentElement.classList.add('incorrect')
        errors.push('Missing Email')
    }
    if (password === '' || password == null){
        password_input.parentElement.classList.add('incorrect')
        errors.push('Missing Password')
    }

    return errors;
}

/* Incorrect Class Clearer */
const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = '';
        }
    })
})

/* REGISTRATION AND LOGIN HANDLING */
/* Account Creation Handler */
function createAccount(e) {
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    const json = JSON.stringify(obj)
    const uniqueKey = obj.email;

    const existingUser = localStorage.getItem(uniqueKey)
    if (existingUser) {
        e.preventDefault();
        error_message.innerText = 'Account already exists.'
        email_input.parentElement.classList.add('incorrect')
    } else {
        localStorage.setItem(uniqueKey, json)
        window.location.href = 'login.html'
        e.preventDefault();
    }
}

/* Login Handler */
function loginAccount(e) {
    e.preventDefault(); // Prevent form submission at the start
    const userEmail = email_input.value;
    const userPassword = password_input.value;

    const storedData = localStorage.getItem(userEmail);

    if (storedData) {
        const storedObj = JSON.parse(storedData);

        if (storedObj.password === userPassword) {
            sessionStorage.setItem('userEmail', userEmail);
            window.location.href = '../Main/menu.html';
        } else {
            error_message.innerText = 'Incorrect details.';
            password_input.parentElement.classList.add('incorrect');
        }
    } else {
        error_message.innerText = 'Email not found.';
        email_input.parentElement.classList.add('incorrect');
    }
}
