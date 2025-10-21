const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('#text');
const generate_btn = document.querySelector('#generate');

generate_btn.addEventListener('click', () => {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  text.innerText = color;
  wrapper.style.backgroundColor = color;
});

text.addEventListener('click', () => {
  navigator.clipboard.writeText(text.innerText);
});

