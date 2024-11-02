export function createSignUp(){
    
    let inputs = document.querySelectorAll('input')

    let loginPage = document.getElementById('login-page')
    loginPage.style.display = 'none'

    let form = document.getElementById('form')


    let formsContent = document.getElementById('formsContent')
    formsContent.style.display = 'flex'

    let password = document.getElementById('password')

    let createPasswordAsterik = document.createElement('div')
    createPasswordAsterik.innerHTML = `*`
    createPasswordAsterik.id = 'asterik'

    let createPassword = document.createElement('label')
    createPassword.innerHTML = 'Create Password: '
    createPassword.htmlFor = 'passwordCreate'

    let createPasswordInput = document.createElement('input')
    createPasswordInput.id = 'passwordCreate'
    createPasswordInput.required = true

    let confirmPasswordAsterik = document.createElement('div')
    confirmPasswordAsterik.innerHTML = '*'
    confirmPasswordAsterik.id = 'asterik'
 
    let confirmPassword = document.createElement('label')
    confirmPassword.innerHTML = 'Confirm Password: '
    createPassword.htmlFor = 'confirmPassword'

 
    let confirmPasswordInput = document.createElement('input')
    confirmPasswordInput.id = 'confirmPassword'
    confirmPasswordInput.required = true

    let errorMessage = document.createElement('div')
    
 
    password.append(createPasswordAsterik, createPassword, createPasswordInput, confirmPasswordAsterik, confirmPassword, confirmPasswordInput)


    
    let sumbit = document.getElementById('sumbit')

    sumbit.addEventListener('click', function(event){

        inputs.forEach((element) => {

            if(element.checkValidity() == false){

                element.style.border = '1px solid red'
            }
        })

        if(createPasswordInput.value.toString() == confirmPasswordInput.value.toString()){

                console.log('values match')

        }


        else if(createPasswordInput.value.toString() != confirmPasswordInput.value.toString()){
    
    
                event.preventDefault()  
                
                errorMessage.innerHTML = ' '
                errorMessage.innerHTML = 'Passwords Do not match'
                errorMessage.style.color = 'red'
                


                form.insertBefore(errorMessage, sumbit)
        }
    })

}
// Passed