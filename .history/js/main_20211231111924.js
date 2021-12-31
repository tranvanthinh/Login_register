let signUpButton = document.querySelector('#signUp');
    let signInButton = document.querySelector('#signIn');
    let container = document.querySelector('#container');

    signUpButton.addEventListener('click', function() {
      container.classList.add("right-panel-active");
  });

    signInButton.addEventListener('click', function() {
      container.classList.remove("right-panel-active");
  });



let btnRegisterEl = document.querySelector('button[type="submit"]')

btnRegisterEl.addEventListener('click', function(event){
    event.preventDefault()
})