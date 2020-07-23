const keyElems = {
  html        : document.querySelector('html'),
  nightButton : document.querySelector('.night-button') ? document.querySelector('.night-button') : undefined
};
if (!keyELems.nightButton) {
  let nButton = document.createElement('button');
  nButton.classList.add('night-button');
  keyElems.nightButton = nButton;
  document.querySelector('body').prepend(keyElems.nightButton);
}
const isNight = () => keyElems.html.classList.contains('night');
function toggleNight() {
  setNight(!isNight());
}
function setNight(night) {
  if (night) {
    keyElems.html.classList.add('night');
    keyElems.nightButton.textContent = `Day Mode`;
  } else {
    keyElems.html.classList.remove('night');
    keyElems.nightButton.textContent = `Night Mode`;
  }
}
function checkNightOnLoad() {
  let h = new Date().getHours();
  if (h < 7 || h > 18) {
    setNight(true);
  } else {
    setNight(false);
  }
}
document.addEventListener('DOMContentLoaded',() => {
  checkNightOnLoad();
  keyElems.nightButton.addEventListener('click',toggleNight);
});
