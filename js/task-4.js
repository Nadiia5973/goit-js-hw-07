const forma = document.querySelector('.login-form');
forma.addEventListener('submit', event => {
  event.preventDefault();
  const user = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (user.email === '' || user.password === '') {
    alert('All form fields must be filled in');
    return;
  }
  event.target.reset();
  console.log(user);
});
