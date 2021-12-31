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
// let phone = document.querySelector('#phone')

// btnRegisterEl.addEventListener('click', function(event){
//     let phoneError = ''
//     if(phone.length != 10){
//       document.querySelector('#phone').setCustomValidity("Vui lòng nhập đủ 10 kí tự")
//     }
// })
btnRegisterEl.addEventListener('click', function(event){
  let phoneEl = document.querySelector('#phone').value
  let emailEl = document.querySelector('#email').value
  let fullnameEl = document.querySelector('#fullname').value
  let passwordEl = document.querySelector('#password').value

  

  if(_.isEmpty(phoneEl)){
    document.querySelector('.error').innerHTML = 'Vui lòng nhập đủ thông tin'
  }
})