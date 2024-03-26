const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const submit = document.querySelector('[type="submit"]')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const phone = document.querySelector('#tel')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')


passwordConfirm.addEventListener("change", (e)=>{
    let passwordValue = password.value
    let passwordConfirmValue = passwordConfirm.value
    let errorDiv = document.createElement('div')
    errorDiv.classList.add('error')
    if(!passwordValue){
        password.classList.add("error")
        errorDiv.textContent = "Please fill in your password"
        password.parentElement.appendChild(errorDiv)  
        return  
    }
    if(!passwordConfirmValue){
        passwordConfirm.classList.add("error")
        errorDiv.textContent = "Please fill in your password"
        passwordConfirm.parentElement.appendChild(errorDiv)    
        return
    }
    if(passwordValue !== passwordConfirmValue){
        e.preventDefault()
        passwordConfirm.classList.add('error')
        errorDiv.textContent = "Passwords do not match"
        passwordConfirm.parentElement.appendChild(errorDiv)
        password.focus()
    }
    if(passwordConfirmValue === passwordValue){
        password.classList.remove('error')
        passwordConfirm.classList.remove('error')
        return
    }
})

