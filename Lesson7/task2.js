const VIEW_DELAY = 300;

let h2 = document.createElement('h2');
document.body.prepend(h2);
h2.innerHTML = " ";

let fieldText = document.createElement('input');
fieldText.setAttribute('type', 'text');
document.body.append(fieldText);

let nTimeoutId = null;

let inputText = document.getElementsByTagName('input');
inputText.item(0).addEventListener('keyup', updateHeaderLevel2);

function updateHeaderLevel2() {
  clearTimeout(nTimeoutId);
  nTimeoutId = null;

  nTimeoutId = setTimeout(function () {
    h2.innerHTML = inputText[0].value;
  }, VIEW_DELAY);

}
