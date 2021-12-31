let btnRegisterEl = document.querySelector('button[type="submit"]')

btnRegisterEl.addEventListener('click', function(event){
    event.preventDefault()
    document.querySelector('.error').innerText = 'red'
})