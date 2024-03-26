const form = document.querySelector('#createAccountForm')
const inputs = form.querySelectorAll('input')

const validateForm = (e)=>{
    // Check password Validation
    const checkPassword = ()=>{
        const pass = form.querySelector("#password")
        const passConfirm = form.querySelector("#password-confirm")
        const error = (text, element)=>{
            console.log(text)
            console.log(element.parentElement)
            const div = document.createElement('div')
            div.classList.add('error')
            div.textContent = text
            element.parentElement.appendChild(div)
            element.classList.add('error')
            return false
        }

        if(!pass.value) return
        if(!passConfirm.value) return
        if(pass.value !== passConfirm.value) return error("passwords do not match", passConfirm)
        
        if(pass.value === passConfirm.value){
            pass.classList.add('valid')
            passConfirm.classList.add('valid')
            return true
        }
    }
    return checkPassword()
}
form.addEventListener("change", validateForm)
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(validateForm()) form.submit()
    return
})