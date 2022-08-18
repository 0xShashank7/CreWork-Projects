let username = document.getElementById("user")
let password = document.getElementById("pass")

let emailError = document.getElementById("email_error")
let passError = document.getElementById("pass_error")
let numError  = document.getElementById("num_error")

let login = document.getElementById("loginButton")


const buttonClick = () => {
        let emailValid = false
        let passValid = false
        let passNumber = false

        emailEntered = username.value
        passEntered = password.value
        

        if(passEntered.match(/[0-9]/)){
            passNumber = true
        }
        else{
            passNumber = false
        }
        if(passNumber){
            numError.classList.remove("show")
        } else{
            numError.classList.add('show')
        }

        

        if(passEntered.length < 4 || passEntered > 12){
            passValid=false
        }
        else{
            passValid = true
        }

        if(!passValid){
            passError.classList.add('show')
        }
        else{
            passError.classList.remove('show')    
        }



        if(emailEntered.includes("@") && (emailEntered.includes(".com") || emailEntered.includes(".in"))){
            emailValid = true
        }
        else{
            emailValid = false
        }

        if(emailValid){
            emailError.classList.remove('show')
        }
        else{
            emailError.classList.add('show')
        }


        if(emailValid==true && passValid==true && passNumber===true){
            window.location.href="https://c.tenor.com/KbXyTm7I0WIAAAAM/rajni-robo.gif"
        }

        
        
}

    login.addEventListener("click", buttonClick)