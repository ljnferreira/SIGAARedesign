const select = document.querySelector("#system");

const password = document.querySelector('#password');
const warnings = document.querySelector('.warnings');
const message = document.querySelector('#message');
const input = document.querySelector('#input');
const toggle = document.querySelector('#theme-toggler');  

let theme = "light"
let text = "Mudar para tema escuro"

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
  if(text == "Mudar para tema escuro"){
    text = "Mudar para tema claro";
  }else{
    text = "Mudar para tema escuro"
  }
  document.body.dataset.theme = theme;
  toggle.title = text
  console.log(text)
}

input.onchange = setTheme;

select.onchange = handleChange;
