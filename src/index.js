import '/Users/elijahmoye/Desktop/validation/Sign_IN/src/css/styles.css'
import _ from 'lodash';
import { createSignUp } from '/Users/elijahmoye/Desktop/validation/Sign_IN/src/java/mechanics/signUp.js';
import { createSignIn } from '/Users/elijahmoye/Desktop/validation/Sign_IN/src/java/mechanics/signIn.js';



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




