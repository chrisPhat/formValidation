var signUpForm = document.querySelector('#signUpForm');
var userNameField = document.querySelector('#usernameField');
var userNameErrorMessage = document.querySelector('#usernameErrorMessage');

signUpForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(!signUpForm.username.value){
        userNameField.classList.add('errorField');
        userNameErrorMessage.classList.remove('hidden');
        console.log('You need to enter a username');
    }


});