let score = 0;
let timer = 20;
let direction = 0;
let toggle = true;

setInterval(function () { if (timer > 0) { timer -= 1 } timerBox.innerHTML = timer }, 1000);
setInterval(function () {
  direction = Math.floor(Math.random() * 4)
  if (direction === 0) {
    direction = "up"
  }
  else if (direction === 1) {
    directionBox.innerHTML = "right"
  }
  else if (direction === 2) {
    directionBox.innerHTML = "down"
  }
  else {
    directionBox.innerHTML = "left"
  }
}, 2000);



//Block of code below should be state of buttons
window.addEventListener('gamepadconnected', (event) => {
  const update = () => {


    for (const gamepad of navigator.getGamepads()) {
      if (!gamepad) continue;

      if (gamepad.buttons[0].pressed && timer > 0 && toggle) {
        if (gamepad.axes[1] <= -0.8 && direction == 0) {
          console.log("up")
          score += 1
          toggle = false
        }
        else if (gamepad.axes[1] >= 0.8 && direction == 2) {
          console.log("down")
          score += 1
          toggle = false
        }
        else if (gamepad.axes[0] <= -0.8 && direction == 3) {
          console.log("left")
          score += 1
          toggle = false
        }
        else if (gamepad.axes[0] >= 0.8 && direction == 1) {
          console.log("right")
          score += 1
          toggle = false
        }
      }
      else if (!gamepad.buttons[0].pressed && !toggle) {
        toggle = true
      }
      scoreBox.innerHTML = 'Score: ' + score
    }
    requestAnimationFrame(update);
  };
  update();
});