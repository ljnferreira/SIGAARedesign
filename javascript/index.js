const select = document.querySelector("#system");

const password = document.querySelector('#password');
const warnings = document.querySelector('.warnings');
const message = document.querySelector('#message');
const input= document.querySelector('#input');

let theme = "light"

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

const setTheme = () => {
  if(theme==="light"){
    theme = "dark"; 
  }else{
    theme = "light";
  }
  document.body.dataset.theme = theme;
}

input.onchange = setTheme;

select.onchange = handleChange;