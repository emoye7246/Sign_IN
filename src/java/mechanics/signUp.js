export function createSignUp(){
    

    let loginPage = document.getElementById('login-page')
    loginPage.style.display = 'none'


    let formsContent = document.getElementById('formsContent')
    formsContent.style.display = 'flex'

    let createPasswordId = document.getElementById('createPassword')

    let confirmPasswordId = document.getElementById('confirmPassword')

    let createPassword = document.createElement('label')
    createPassword.innerHTML = 'Create Password: '
    createPassword.htmlFor = 'passwordCreate'

    let createPasswordInput = document.createElement('input')
    createPasswordInput.id = 'passwordCreate'
    createPasswordInput.required = true
 
    let confirmPassword = document.createElement('label')
    confirmPassword.innerHTML = 'Confirm Password: '
    createPassword.htmlFor = 'confirmPassword'

 
    let confirmPasswordInput = document.createElement('input')
    confirmPasswordInput.id = 'confirmPassword'
    confirmPasswordInput.required = true

    
    createPasswordId.append(createPassword, createPasswordInput)

    confirmPasswordId.append(confirmPassword, confirmPasswordInput)


    formValid(createPasswordInput, confirmPasswordInput)

}


function formValid(checkPasswordOne, checkPasswordTwo){

    let submit = document.getElementById('submit')

    submit.addEventListener('click', function(event){

        if(checkPasswordOne.value.trim() != checkPasswordTwo.value.trim()){

            event.preventDefault()
            console.log('works')

        }
        else if(checkPasswordOne.value == checkPasswordTwo.value){

            console.log('works')
        }
    })

}


// Passed