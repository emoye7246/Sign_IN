export function displayValidation(){
    let newPassword = document.getElementById('newPassword')
    let confirmPasswords = document.getElementById('confirmPasswords')
    
    let special = document.getElementById('special')
    let characterCount = document.getElementById('characterCount')
    let searchNumber = document.getElementById('searchNumber')
    let upperCase = document.getElementById('upperCase')
    let pass = document.getElementById('pass')

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

    // Passwords

    if(newPassword.value.trim() == confirmPasswords.value.trim()){

        pass.style.color = 'green'


    }
    else{

        pass.style.color = 'lightgray'

    }


}