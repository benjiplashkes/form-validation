const form = document.querySelector('#createAccountForm')
const inputs = form.querySelectorAll('input')

const validateForm = (e)=>{
    //error displaying
    const errorDiv = document.querySelector('div.error')
    const error = (text, element)=>{
        console.log(text)
        console.log(element.parentElement)
        const div = document.createElement('div')
        div.classList.add('error')
        div.textContent = text
        element.parentElement.appendChild(div)
        element.classList.add('error')
    }
    
    // Check password Validation
    const checkPassword = ()=>{
        const pass = form.querySelector("#password")
        const passConfirm = form.querySelector("#password-confirm")
        
        errorDiv?.remove() // reset error state
        
        if(!pass.value) return  false
        if(!passConfirm.value) return  false
        if(pass.value !== passConfirm.value) {
            error("passwords do not match", passConfirm)
            return false
        }
             
        if(pass.value === passConfirm.value){
            pass.classList.add('valid')
            passConfirm.classList.add('valid')
            return true
        }
        return 
    }
    const validateFields = () =>{
        return true
    }
    const styleValidFields = ()=>{
        const input = e.target
      
            console.log(input.parentElement)
            if(input.validity.valid && !input.indeterminate) input.parentElement.classList.add('valid')
        
    }
    styleValidFields()
    valid = checkPassword() ? validateFields() : false
    return valid 
}
form.addEventListener("change", validateForm)
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(validateForm())form.submit()
    return
})