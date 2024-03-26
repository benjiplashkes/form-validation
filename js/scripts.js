const inputs = document.querySelectorAll("form input");

inputs.forEach((input) => {
  addEventListener("change", (e) => {
    setTimeout(()=>{
        input = e.target
        input.parentElement.classList.remove('valid');
        input.parentElement.classList.remove('invalid')
        if (input.validity.valid){
           return input.parentElement.classList.add('valid')
        }
        return input.parentElement.classList.add('invalid')
        
    }, 500)
  });
});
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
