const inputText = document.querySelector('#name-input');
const spanAnon = document.querySelector('#name-output');
inputText.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  spanAnon.textContent === ''
    ? (spanAnon.textContent = 'Anonymous')
    : (spanAnon.textContent = inputValue);
});
