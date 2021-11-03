let timerNumber = document.getElementsByClassName('timer_number');
let quantitySeconds = document.getElementsByClassName('quantity_second');
let buttonStart = document.getElementsByClassName('button');
let nIntervalId;

quantitySeconds[0].addEventListener('input', viewCounterTimer);
buttonStart[0].addEventListener('click', startTimer);

function viewCounterTimer() {
  timerNumber[0].innerHTML = quantitySeconds[0].value;
}

function startTimer()
{
  if (parseInt(timerNumber[0].innerHTML) === 0) {
    timerNumber[0].innerHTML = quantitySeconds[0].value;
  }
  if (buttonStart[0].value === "Start timer") {
    buttonStart[0].value = "Stop timer";
    nIntervalId = setInterval(decreaseTimer, 1000);
  } else {
    buttonStart[0].value = "Start timer";
    clearInterval(nIntervalId);
    nIntervalId = null;
  }
}

function decreaseTimer() {
  let digitNum = parseInt(timerNumber[0].innerHTML);
  if (digitNum - 1 > 0) {
    digitNum -= 1;
  } else {
    digitNum = 0;
    buttonStart[0].value = "Start timer";
    clearInterval(nIntervalId);
    nIntervalId = null;
  }
  timerNumber[0].innerHTML = digitNum.toString();
}