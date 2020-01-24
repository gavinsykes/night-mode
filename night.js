const keyElems = {
  html        : document.querySelector('html'),
  nightButton : document.querySelector('.night-button')
};
function toggleNight() {
  isNight() ? setNight(false) : setNight(true);
}
function isNight() {
  return keyElems.html.classList.contains('night');
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
