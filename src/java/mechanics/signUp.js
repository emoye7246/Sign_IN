export function createSignUp(){
    

    let loginPage = document.getElementById('login-page')
    loginPage.style.display = 'none'


    let formsContent = document.getElementById('formsContent')
    formsContent.style.display = 'flex'


    let submit = document.getElementById('submit')

    let inputs = document.querySelectorAll('input')

    let newPassword = document.getElementById('newPassword')
    let confirmPasswords = document.getElementById('confirmPasswords')


    newPassword.addEventListener('keyup', checkPassword)


    submit.addEventListener('click', function(event){

        inputs.forEach((element) => {

            if(element.checkValidity() == false){

                element.style.border = '1px solid red'
            }
        })

        if(newPassword.value.trim() != confirmPasswords.value.trim()){

            event.preventDefault()
            console.log('works')

        }
        else if(newPassword.value == confirmPasswords.value){

            console.log('works')
        }
    })


}

function checkPassword(){

    let newPassword = document.getElementById('newPassword')


    let special = document.getElementById('special')
    let characterCount = document.getElementById('characterCount')
    let searchNumber = document.getElementById('searchNumber')
    let upperCase = document.getElementById('upperCase')


    if(newPassword.value.trim().match(/[^a-zA-Z0-9\s]/g)){

        special.style.color = 'green'

    }
    else{

        special.style.color = 'lightgray'
        
    }
    // special character

    if(newPassword.value.trim().length >= 4 ){

        characterCount.style.color = 'green'
    }
    else{

        characterCount.style.color = 'lightgray'
    }
    // character Count
    
    if(newPassword.value.trim().match(/[0-9]/)){

        searchNumber.style.color = 'green'

    }
    else{

        searchNumber.style.color = 'lightgray'
    }
    //  Atleast one number

    if(newPassword.value.trim().match(/[A-Z]/)){

        upperCase.style.color = 'green'
    }
    else{

        upperCase.style.color = 'lightgray'

    }
    


}


// Passed