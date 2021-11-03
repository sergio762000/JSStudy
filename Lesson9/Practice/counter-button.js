document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');

  let count = 0;

  function increment() {
    button.textContent = (count++).toString();
  }

  increment();
  button.addEventListener('click', increment);
  document.body.append(button);
});