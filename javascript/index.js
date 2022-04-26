const select = document.querySelector("#system");

const password = document.querySelector('#password');
const warnings = document.querySelector('.warnings');
const message = document.querySelector('#message');

password.addEventListener('keyup', function (e) {
  if (e.getModifierState('CapsLock')) {
    message.textContent = 'Caps lock está ativado!';
    warnings.style.display = 'flex';
  } else {
    message.textContent = '';
    warnings.style.display = 'none';
  }
});

const handleChange = () => {
  const current = document.querySelector("#current-system");
  current.innerText = select.value;
}

select.onchange = handleChange;