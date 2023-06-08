// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left);
    
    if (currentLeft > 0) {
      dodger.style.left = `${currentLeft - 1}px`;
    }
  }
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left);
    const containerWidth = document.getElementById('game').offsetWidth;
    const dodgerWidth = dodger.offsetWidth;
    
    if (currentLeft + dodgerWidth >= containerWidth) {
      dodger.style.left = `${currentLeft + 1}px`;
    }
  }