const form = document.getElementById("submissionform")


form.addEventListener("submit", (event) => {

    event.preventDefault()

    let isValid = true;

    const username = form.username.value
    const password = form.password.value
    const confirmpassword = form.confirmpassword.value


    if (username.trim().length < 3) {
        const usernameError = document.getElementById('usernameError');
        usernameError.innerText = 'Minimum 3 characters required'
        isValid = false
    }

    
    if(password.length < 6){
        const passwordError = document.getElementById('passwordError');
         passwordError.innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character'
        isValid = false
    }


    if(password !== confirmpassword){
     document.getElementById('confirmpasswordError') .innerText = 'Passwords does not match'
        isValid = false
    }

    if (isValid){
        form.submit()
        form.reset()
    }

})

let showStatus = false;
const showHideButton = document.getElementById('icon')
    showHideButton.addEventListener('click',() => {
        showStatus = !showStatus
        document.getElementById('password').type = showStatus ? "text" : "password"
        showHideButton.innerHTML = showStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
    })

    let showStatus2= false;
const showHideButton2 = document.getElementById('icn')
    showHideButton2.addEventListener('click',() => {
        showStatus2 = !showStatus2
        document.getElementById('confirmpassword').type = showStatus2 ? "text" : "password"
        showHideButton2.innerHTML = showStatus2 ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
    })