export function createSignUp(){


    let loginPage = document.getElementById('login-page')
    loginPage.style.display = 'none'


    let formsContent = document.getElementById('formsContent')
    formsContent.style.display = 'flex'

    let password = document.getElementById('password')

    let createPassword = document.createElement('label')
    createPassword.innerHTML = 'Create Password: '
    createPassword.htmlFor = 'passwordCreate'
 
    let createPasswordInput = document.createElement('input')
    createPasswordInput.id = 'passwordCreate'
 
    let confirmPassword = document.createElement('label')
    confirmPassword.innerHTML = 'Confirm Password: '
    createPassword.htmlFor = 'confirmPassword'
 
    let confirmPasswordInput = document.createElement('input')
    confirmPasswordInput.id = 'confirmPassword'
 
    password.append(createPassword, createPasswordInput, confirmPassword, confirmPasswordInput)


    let sumbit = document.getElementById('sumbit')

    sumbit.addEventListener('click', function(event){

        event.preventDefault()
        console.log('it works')
    })




}
