/* Declaring variables for each input & error message container */
const form = document.getElementById('form');
const username_input = document.getElementById('username-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

/* Allows the user to see their password */
function showPassword() {
    if (password_input.type === "password") {
        password_input.type = "text";  
    } else {
        password_input.type = "password"; 
    }
}
/* This simply changes the input type from password to text and vice versa */

/* Checking for user 'submit' via button or enter key */
form.addEventListener('submit', (e) => { 
    let errors = []

    if(username_input){
        errors = getRegisterFormErrors(username_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

/* The above code tells you which function should be called. It does this by checking for the 'username_input', as only the registration form has this.
This way we don't check for errors that wont exist. If errors are found (The errors array containing at least a single error) then we prevent form submission*/


/* Account creation & Login Handling */
    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join("\n ")
    }
    else {
        if(username_input){
            const fd = new FormData(form);
            const obj = Object.fromEntries(fd);

            const json = JSON.stringify(obj);
            const uniqueKey = obj.email

            const existingUser = localStorage.getItem(uniqueKey);
            if (existingUser) {
                e.preventDefault();
                error_message.innerText = 'Account already exists.'
                email_input.parentElement.classList.add('incorrect');
            } else {
                localStorage.setItem(uniqueKey, json);
                window.location.href = 'login.html';
                e.preventDefault();
            }
        } else {
            const userEmail = email_input.value;
            const userPassword = password_input.value;

            const storedData = localStorage.getItem(userEmail);

            if (storedData) {
                const storedObj = JSON.parse(storedData);

                if (storedObj.password === userPassword) {
                    window.location.href = '../main/menu.html';
                    e.preventDefault();
                } else {
                    e.preventDefault();
                    error_message.innerText = 'Incorrect details.';
                    password_input.parentElement.classList.add('incorrect');
                }
            } else {
                e.preventDefault();  // Prevent form submission
                error_message.innerText = 'Email not found.';
                email_input.parentElement.classList.add('incorrect');
            }
        }
    }

})

/* This code does a couple things. After our error checking has ran its course, if there are no errors we check if the username_input element exists.
This decides whether we are at the registration or login form, the same way we've done this before. 

The registation section creates an object from the inputted form data and turns it into a javascript object. It turns this object into a string which allows us
to then store it in localstorage. It stores it under a unique key, email in this case, but only after it checks if there is not already data saved under the email.

The second section, assumes that this is the login form and will only have an email and password input. It compares the email and password to those found in localstorage
if the email is found, the password is checked and if correct, the user is linked to the main page. If incorrect the user is warned using our existing errror system.

If the email isn't found at all, again this error is shown. 
*/



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


    return errors;
}

/* The above code checks that the username, email & password inputs aren't empty. If they are, it pushes an error into the 'errors' arrray & adds the incorrect class to the element for our styling. 
It also checks for our password requirements. (Length, Characters & Identical matching passwords). */

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

/* Validates the login fields using the same method as the registration form */

/* Incorrect Class Clearer */
const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})

/* Checks to see if an input is edited after being incorrect. If so, the incorrect class is removed and error messages are cleared (by changing the text to ''). 
.filter(input => input != null) removes any null or undefined values, therefore when we check for elements that don't exist,
ie when we for repeat password in the login form, we dont get any errors */



