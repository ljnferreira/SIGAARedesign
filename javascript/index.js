const select = document.querySelector("#system");

const handleChange = () => {
  const current = document.querySelector("#current-system");
  current.innerText = select.value;
}

select.onchange = handleChange;