let btnRegisterEl = document.querySelector('button[type="submit"]')

btnRegisterEl.addEventListener('click', function(){
    document.querySelector('.error').style.innerText = 'red'
})