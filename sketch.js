var bgImg, frogImg, frog

function preload() {
  var bgImg = loadImage("assets/bg sky.jpeg")
  var frogImg = loadImage("assets/frog.png")


}
function setup() {
  createCanvas(400, 400);
  frog = createSprite(50,160,20,50)
  frog.addImage(frogImg)
}
function draw() {
  background(220);
  //image(bgImg,600, 600, 1200, 1200)
  drawSprites()
}