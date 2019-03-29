class Player {
  constructor(){
    this.radius = 50
    this.x = CANVAS_WIDTH/2
    this.y = CANVAS_HEIGHT - this.radius
    this.vx = 0
    this.vy = 0
    // Listen for key events
    document.onkeydown = event => {
      console.log(event.keyCode)
      if (event.keyCode === 37) { // left
        this.vx = -10
      }
      if (event.keyCode === 39) { // left
        this.vx = 10
      }
    }
  }
  draw(ctx){
    ctx.save()

    ctx.fillStyle = "#3366ee"
    ctx.lineWidth = 3

    // Draw the circle
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()

    ctx.restore()
  }
  update(){
    // vx = Δx/Δt ===(Δt=1)==> Δx = vx
    this.x += this.vx
    // vy = Δy/Δt ===(Δt=1)==> Δy = vy
    this.y += this.vy

    // Δvy = gravity
    this.vy += GRAVITY

    this.vx *= 0.98

    // If the player touches the bottom, it bounces up
    if (this.y + this.radius > CANVAS_HEIGHT) {
      this.vy = BOUNCING_SPEED
    }

    // If the player touches the left or right border, it bounces
    if (this.x-this.radius < 0) {
      this.vx = Math.abs(this.vx)
    }
    if (this.x+this.radius>CANVAS_WIDTH) {
      this.vx = -Math.abs(this.vx)
    }
  }
}