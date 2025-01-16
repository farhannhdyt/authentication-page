const idOption = document.getElementById('idOption')
const emailOption = document.getElementById('emailOption')
const idInputGroup = document.getElementById('idInputGroup')
const emailInputGroup = document.getElementById('emailInputGroup')

idOption.addEventListener('change', () => {
  if (idOption.checked) {
    idInputGroup.classList.remove('hidden')
    emailInputGroup.classList.add('hidden')
  }
})

emailOption.addEventListener('change', () => {
  if (emailOption.checked) {
    emailInputGroup.classList.remove('hidden')
    idInputGroup.classList.add('hidden')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const userInputField = document.getElementById('username')
  const inputNumberField = document.getElementById('idNumber')
  const inputEmailField = document.getElementById('email')
  const validateButton = document.getElementById('validateButton')

  function toggleValidateButton() {
    const isUserInputFilled = userInputField.value.trim() !== ""
    const isInputNumberFilled = inputNumberField.value.trim() !== ""
    const isInputEmailFilled = inputEmailField.value.trim() !== ""

    if (isUserInputFilled && isInputNumberFilled || isInputEmailFilled) {
      validateButton.disabled = false
      validateButton.classList.remove('disabled')
    } else {
      validateButton.disabled = true
      validateButton.classList.add('disabled')
    }
  }


  userInputField.addEventListener('input', toggleValidateButton)
  inputNumberField.addEventListener('input', toggleValidateButton)
  inputEmailField.addEventListener('input', toggleValidateButton)
})