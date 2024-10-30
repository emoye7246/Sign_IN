import '/Users/elijahmoye/Desktop/validation/Sign_IN/src/css/styles.css'
import _ from 'lodash';

function createOrLogin(){

    let signUp = document.getElementById('signUp')
    let signIn = document.getElementById('signIn')

    signUp.addEventListener('click', () => {

        createSignUp()
    })

    signIn.addEventListener('click', () => {

        createSignIn()
    })
}
createOrLogin()


function createSignUp(){

    console.log('sign up')
}

function createSignIn(){

    console.log('sign in')
}




