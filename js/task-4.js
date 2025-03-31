const forma = document.querySelector('.login-form');
forma.addEventListener('submit', event => {
  event.preventDefault();
  const user = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (user.email.trim() === '' || user.password.trim() === '') {
    alert('All form fields must be filled in');
  }
  event.target.reset();
  console.log(user);
});
