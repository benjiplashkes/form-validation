const inputs = document.querySelectorAll("form input");

//style inputs by validation

inputs.forEach((input) => {
  addEventListener("change", (e) => {
    input = e.target;

    const styleValidatedInputs = () => {
      input.parentElement.classList.remove("valid");
      input.parentElement.classList.remove("invalid");
      if (input.validity.valid) {
        if (input.id === "passwordconfirm") return;
        return input.parentElement.classList.add("valid");
      }
      return input.parentElement.classList.add("invalid");
    };
    const validatePassword = () => {
      const passwordFieldsDiv = document.querySelector("div.password-fields");
      document.querySelector('div.error')?.remove()
      if (input.id !== "password-confirm") return;
      if (password.value === passwordConfirm.value) {
        password.parentElement.classList.add("valid");
        passwordConfirm.parentElement.classList.add("valid");
        return;
      }
      if (password.value !== passwordConfirm.value) {
        password.parentElement.classList.add("invalid");
        passwordConfirm.parentElement.classList.add("invalid");
        const div = document.createElement("div");

        div.classList.add("error");
        div.textContent = `passwords do not match`;
        passwordFieldsDiv.appendChild(div);
        passwordConfirm.value = ""
        password.focus()
      }
    };
    styleValidatedInputs();
    validatePassword();
  });
});
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
