// this is the video i used =
// https://www.youtube.com/watch?v=vyqbNFMDRGQ&list=RDCMUC9Yp2yz6-pwhQuPlIDV_mjA&start_radio=1&rv=vyqbNFMDRGQ&t=1655
// i stoped at 103:11
//socket.io figer out how that works
// add enemy movements
// figer out why last key donst work
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20


c.fillRect(0, 0, canvas.width, canvas.height,)
const gravity = .2
class Sprite {
  constructor({
    position,
    velocity,
    color = "red",
    offset
  }) {
    this.position = position
    this.velocity = velocity
    this.height = 150
    this.width = 50
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: offset,
      width: 100,
      height: 50
    }
    this.color = color
    this.isAttacking

  }
  draw() {
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // attack box
    if (this.isAttacking) {
      c.fillStyle = 'green';
      c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
    };
  }
  update() {
    this.draw()
    this.attackBox.position.x = this.position.x - this.attackBox.offset.x
    this.attackBox.position.y = this.position.y
    
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else(this.velocity.y += gravity)
  }
  attack() {
    this.isAttacking = true
    setTimeout(() => {
      this.isAttacking = false
    }, 100);
  }
}


const player = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 10
  },
  offset: {
    x: 0,
    y: 0
  }
})

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 10
  },
  color: 'blue',
  offset: {
    x: 50,
    y: 0
  }
})
enemy.draw()
console.log(player)
console.log(enemy)

const keys = {
  a: {
    pressed: false
  },

  d: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  }
}
function rectangularCollision(rectangle1,
  rectangle2){
  return(
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
    rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height 
  )
}
let lastKey
//after this point we make the controls for movement
function animate() {
  c.fillStyle = 'black'
  window.requestAnimationFrame(animate)
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
  player.velocity.x = 0
  enemy.velocity.x = 0
  // player movement
  if (keys.a.pressed) {
    player.velocity.x = -3
  } else if (keys.d.pressed) {
    player.velocity.x = 3
  };
  // enemy movement
  if (keys.ArrowLeft.pressed) {
    enemy.velocity.x = -3
  } else if (keys.ArrowRight.pressed) {
    enemy.velocity.x = 3
  }
  // detect for collision
  if (
    player.attackBox.position.x + player.attackBox.width >=
    enemy.position.x && player.attackBox.position.x <= enemy.position.x + enemy.width &&
    player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
    player.attackBox.position.y <= enemy.position.y + enemy.height &&
    player.isAttacking
  ) {
    player.isAttacking = false
    console.log('go')
  }
}

animate()

window.addEventListener('keydown', (event) => {

  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      player.velocity.y = -8
      break
    case 's':
      player.attack()
      break
    case 'ArrowDown':
      enemy.attack()
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = true
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true
      break
    case 'ArrowUp':
      enemy.velocity.y = -8
      break
  }


})
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break

  }
  console.log(event.key)
})