const DODGER = document.getElementById('dodger')


function moveDodgerLeft() {
    const left = parseInt(DODGER.style.left)
    if (left > 0) {
      DODGER.style.left = `${left - 4}px`
    }
  }
  
  function moveDodgerRight() {
    const left = parseInt(DODGER.style.left)
    if (left < 360) {
      DODGER.style.left = `${left + 4}px`
    }
  }
  
