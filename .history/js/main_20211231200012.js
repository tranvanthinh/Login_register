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

function validateEmail(email) {
  return /^[^s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btnRegisterEl.addEventListener('click', function(event){
  let phoneEl = document.querySelector('#phone').value
  let emailEl = document.querySelector('#email').value
  let fullnameEl = document.querySelector('#fullname').value
  let passwordEl = document.querySelector('#password').value

  // Xử lý cho số điện thoại
  if (_.isEmpty(phoneEl)){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else if (phoneEl.trim().length > 10){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập đủ 10 số")
  }
  else {
    document.querySelector('.phone-error').setCustomValidity("")
  }

  // Xử lý cho Email
  if (_.isEmpty(emailEl)){
    document.querySelector('.email-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  // } else if (!validateEmail(email)){
  //   document.querySelector('.email-error').setCustomValidity("Vui lòng nhập email đúng định dạng")
  }
  else {
    document.querySelector('.email-error').setCustomValidity("")
  }

  // Xử lý cho tên người nhập
  if (_.isEmpty(fullnameEl)){
    document.querySelector('.fullname-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else if (fullnameEl.trim().length <= 2){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập tên dưới 2 kí tự")
  } else if (fullnameEl.trim().length > 50){
    document.querySelector('.phone-error').setCustomValidity("Vui lòng nhập tên trên 50 kí tự")
  }
  else {
    document.querySelector('.fullname-error').setCustomValidity("")
  }

  // Xử lý cho mật khẩu
  if (_.isEmpty(passwordEl)){
    document.querySelector('.password-error').setCustomValidity("Vui lòng nhập đủ thông tin")
  } else {
    document.querySelector('.password-error').setCustomValidity("")
  }
})