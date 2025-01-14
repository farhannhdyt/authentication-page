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