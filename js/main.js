const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Constants
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let frame = 0 // The frame counter
let player = new Player()
let scoreBalls = [
  new ScoreBall()
]

function animation(){
  updateEverything()
  drawEverything(ctx)
  window.requestAnimationFrame(animation)
}
animation()

function drawEverything(ctx){
  ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)

  player.draw(ctx)

  // Draw all scoreBalls
  for (let i = 0; i < scoreBalls.length; i++) {
    scoreBalls[i].draw(ctx)
  }
}

function updateEverything(){
  frame++
  if (frame % 200 === 0) { // When frame is a multiple of 120
    scoreBalls.push(new ScoreBall())
  }

  // Update all scoreBalls
  for (let i = 0; i < scoreBalls.length; i++) {
    scoreBalls[i].update()
  }

  removeUselessScoreBalls()
}


function removeUselessScoreBalls() {
  // // Solution 1: filter
  // scoreBalls = scoreBalls.filter(scoreBall => {
  //   return scoreBall.y - scoreBall.radius - 20 < CANVAS_HEIGHT
  // })
  // Solution 2: remove the 1st item if below the canvas
  if (scoreBalls[0].y - scoreBalls[0].radius - 20 > CANVAS_HEIGHT)
    scoreBalls.shift()
}

