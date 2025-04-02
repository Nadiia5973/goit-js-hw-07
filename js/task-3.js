const inputText = document.querySelector('#name-input');
const spanAnon = document.querySelector('#name-output');
inputText.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  console.log(inputValue);
  inputValue === ''
    ? (spanAnon.textContent = 'Anonymous')
    : (spanAnon.textContent = inputValue);
});
