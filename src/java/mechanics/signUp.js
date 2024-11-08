import { displayValidation } from "./styleValid"

let newPassword = document.getElementById('newPassword')
let confirmPasswords = document.getElementById('confirmPasswords')
let submit = document.getElementById('submit')
let inputs = document.querySelectorAll('input')

export function createSignUp(){
    

    let loginPage = document.getElementById('login-page')
    loginPage.style.display = 'none'


    let formsContent = document.getElementById('formsContent')
    formsContent.style.display = 'flex'

    newPassword.addEventListener('keyup', displayValidation)
    confirmPasswords.addEventListener('keyup', displayValidation)

    checkPassword()

}

function checkPassword(){

    submit.addEventListener('click', function(event){

    inputs.forEach((element) => {

            if(element.checkValidity() == false){

                event.preventDefault()
                element.style.border = '1px solid red'
            }
            else if(element.checkValidity() == true){

                console.log('works')
            }

    })


    // special character

    if(newPassword.value.trim().match(/[^a-zA-Z0-9\s]/g)){

        newPassword.setCustomValidity('')


    }
    else{

        event.preventDefault()
        
        
    }

    // character Count

    if(newPassword.value.trim().length >= 4 ){

        newPassword.setCustomValidity('')
    }
    else{

        event.preventDefault()

    }
    
    //  Atleast one number
    
    if(newPassword.value.trim().match(/[0-9]/)){

        newPassword.setCustomValidity('')


    }
    else{

        event.preventDefault()

    }

    // Must Contain one Uppercase Letter

    if(newPassword.value.trim().match(/[A-Z]/)){

        newPassword.setCustomValidity('')

    }
    else{

        event.preventDefault()

    }

    // Passwords Must Match

    if(newPassword.value.trim() == confirmPasswords.value.trim()){

        console.log('ok')

    }
    else{

        event.preventDefault()

    }
    
})

}


// Passed