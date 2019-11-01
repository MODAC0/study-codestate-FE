function checkCurrentStep(level) {
  return !!window.localStorage.getItem("testing:" + level);
}

function saveCurrentStep(level) {
  window.localStorage.setItem("testing:" + level, true);
}
