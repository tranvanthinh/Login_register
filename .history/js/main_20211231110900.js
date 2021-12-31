let btnRegisterEl = document.querySelector('button[type="submit"]')

btnRegisterEl.addEventListener('click', function(){
    document.querySelectorAll('.error').innerText = 'red'
})