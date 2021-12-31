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

let emailValidate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btnRegisterEl.addEventListener('click', function(event){
  let phoneEl = document.querySelector('#phone').value
  let emailEl = document.querySelector('#email').value
  let fullnameEl = document.querySelector('#fullname').value
  let passwordEl = document.querySelector('#password').value

  if (_.isEmpty(phoneEl)){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  // } else if (_.isEmpty(phoneEl.length == 10)){
  //   document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập đủ 10 số")
  }
  else {
    document.querySelector('.phone-error').setCustomValidity("")
  }

  if (_.isEmpty(emailEl)){
    document.querySelector('.email-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else if (!emailValidate){
    document.querySelector('.email-error').setCustomValidity("Vui lòng nhập email đúng định dạng")
  }
  else {
    document.querySelector('.email-error').setCustomValidity("")
  }

  if (_.isEmpty(fullnameEl)){
    document.querySelector('.fullname-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else if (_.isEmpty(fullnameEl.trim().length <= 2)){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập tên dưới 2 kí tự")
  } else if (_.isEmpty(fullnameEl.trim().length > 20)){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập tên trên 20 kí tự")
  }
  else {
    document.querySelector('.fullname-error').setCustomValidity("")
  }

  if (_.isEmpty(passwordEl)){
    document.querySelector('.password-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else {
    document.querySelector('.password-error').setCustomValidity("")
  }
})