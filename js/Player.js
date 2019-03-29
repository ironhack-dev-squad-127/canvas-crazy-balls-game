class Player {
  constructor(){
    this.radius = 50
    this.x = CANVAS_WIDTH/2
    this.y = CANVAS_HEIGHT - this.radius
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
  update(){}
}