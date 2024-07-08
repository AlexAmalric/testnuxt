export const sketch: any = ({
  xrplAddress = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
  colorCallback = () => { },
  onLoaded = () => { }
}: { xrplAddress: string, colorCallback: any, onLoaded: any }) => (p: any) => {

  console.log(xrplAddress, 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh')
  // ============================================ colors


  let monoChrome = false;
  let camaieux = false;

  let colGreen = "#19FF83",
    colBlue = "#19A3FF",
    colPurple = "#791AFF",
    colRedPurple = "#D91AFF",
    colMagenta = "#FF1A8B",
    colOrange = "#FF671A",
    colYellow = "#FAFF1A",
    colBlack = "#111112",
    colWhite = "#F5F5F",
    colGray = "#39383A",
    colMarine = "#000837"

  // XRPL COLORS

  let palettes = [

    ["#19FF83", "#19A3FF", "#791AFF", "#D91AFF", "#FF1A8B", "#FF671A", "#FAFF1A", "#111112", "#F5F5F", "#39383A"],

    ["#9DB4C0", "#c2dfe3", "#EFA00B", "#5c6b73", "#253237"],
    ["#1C110A", "#E9B44C", "#50A2A7", "#9B2915", "#E4D6A7"],
    ["#F2D492", "#F29559", "#B8B08D", "#283845", "#202C39"],
    ["#F9DBBD", "#FCA17D", "#DA627D", "#9A348E", "#0D0628"],
    ["#EEF0F2", "#EEC643", "#011638", "#0D21A1", "#141414"],
    ["#D1D1D1", "#EAD94C", "#DD7373", "#51A3A3", "#3B3561"],
    ["#DDE8B9", "#E8D2AE", "#D7B29D", "#CB8589", "#796465"],
    ["#FFFFFF", "#588B8B", "#F28F3B", "#C8553D", "#FFD5C2"],
    ["#E1CA96", "#ACA885", "#918B76", "#626C66", "#434A42"],
    ["#A29C9B", "#A62639", "#DB324D", "#56494E", "#511C29"],
    ["#FFD9CE", "#DB5461", "#593C8F", "#8AE1FC", "#171738"],
    ["#D0DB97", "#69B578", "#3A7D44", "#254D32", "#181D27"],
    ["#393E46", "#D65A31", "#AFA98D", "#E2C2C6", "#222831"],
    ["#EEF7FB", "#A3B4A2", "#CDC6AE", "#99CEEB", "#152728"],
    ["#F4F4F4", "#F0A500", "#CF7500", "#666666", "#1A1C20"],
    ["#d8cbc7", "#856084", "#f55d3e", "#077187", "#161925"],
    ["#d8e2dc", "#ffffff", "#546A7B", "#F57266", "#050B10"],
    ["#D8C8E5", "#F46036", "#414770", "#5B85AA", "#120D1C"],
    ["#FBFEF9", "#E1A3AD", "#ED7B84", "#A6BEC9", "#000000"],
    ["#505050", "#363636", "#292929", "#282828", "#080808"],
    ["#E8DDCB", "#036564", "#033649", "#CDB380", "#021027"],
    ["#D5DED9", "#948C75", "#99B2B7", "#D9CEB2", "#251F18"],
    ["#FCF6BD", "#F68787", "#FFB6B9", "#D67373", "#162C3B"],
    ["#FFEBA1", "#FFC857", "#DB3A34", "#08415C", "#071013"],
    ["#E6EBE0", "#F4F1BB", "#9BC1BC", "#EF7B6C", "#1E1C22"],
    ["#CAD2C5", "#52796F", "#354F52", "#84A98C", "#182025"],
    ["#F5E0E7", "#F55D3E", "#D8CBC7", "#077187", "#161925"],
    ["#F6F0ED", "#C2948A", "#7EA8BE", "#BBB193", "#11232D"],
    ["#FEEFDD", "#FAAA8D", "#FF571F", "#50B2C0", "#201E1F"],
    ["#F7E092", "#FDBD28", "#F04848", "#37AD86", "#14142A"],
    ["#E7EFC5", "#BFD7B5", "#A3C4BC", "#F2DDA4", "#2D293D"],
    ["#b9d6f2", "#0353a4", "#006daa", "#003559", "#061a40"],
    ["#f4effa", "#c8b1e4", "#9b72cf", "#532b88", "#2f184b"],
    ["#e5e9f0", "#d8dee9", "#4c566a", "#434c5e", "#2e3440"],
    ["#562C2C", "#F2542D", "#0E9594", "#127475", "#F5DFBB"],
    ["#F1E9DA", "#541388", "#D90368", "#FFD400", "#2E294E"],
    ["#E6F2DA", "#A2D7C2", "#FF9B6A", "#8E5252", "#260B1A"],
    ["#443850", "#E4F58C", "#E87058", "#A3E7E4", "#10141C"],
    ["#040F0F", "#8A2BE2", "#20B2AA", "#FF6347", "#FCFFFC"],
    ["#EEEEFF", "#00CED1", "#FF69B4", "#FFD700", "#191919"],
    ["#FEFFEA", "#FCFC62", "#C9C9C9", "#A3A3A3", "#424242"],
    ["#F0E7D8", "#477998", "#F64740", "#A3333D", "#291F1E"],
    ["#fffcf2", "#ccc5b9", "#403d39", "#eb5e28", "#252422"],
    ["#faf3dd", "#ffa69e", "#b8f2e6", "#aed9e0", "#5e6472"],
    ["#ece2d0", "#cebebe", "#d5b9b2", "#a26769", "#6d2e46"],
    ["#bfc3ba", "#a9aca9", "#60495a", "#3f3244", "#2f2235"],
    ["#B5E48C", "#76C893", "#34A0A4", "#1A759F", "#184E77"],
    ["#FEFAE0", "#606C38", "#DDA15E", "#BC6C25", "#283618"],
    ["#EA8C55", "#C75146", "#AD2E24", "#81171B", "#540804"],
    ["#F9C784", "#FCAF58", "#74C69D", "#40916C", "#1B4332"],
    ["#423E3B", "#FF2E00", "#FEA82F", "#5448C8", "#FFFECB"],
    ["#331832", "#D81E5B", "#F0544F", "#C6D8D3", "#FDF0D5"],
    ["#011627", "#FF3366", "#2EC4B6", "#20A4F3", "#F6F7F8"],
    ["#3A2E39", "#1E555C", "#EDB183", "#F15152", "#F4D8CD"],
    ["#0B090B", "#141414", "#000000", "#D80032", "#0A0A0A"],
    ["#1A535C", "#4ECDC4", "#FF6B6B", "#FFE66D", "#F7FFF7"],
    ["#4B3F48", "#807B67", "#8F8D89", "#BEB2A7", "#C5BEBC"],

  ]


  let colors = [colGreen, colBlue, colPurple, colRedPurple, colMagenta, colOrange, colYellow, colBlack]
  let bgColors = [colBlack, colGray, colMarine]
  let bgColor = ""


  const loadPalette = () => {
    if (DEBUG) console.log("MONO = " + monoChrome + "CAMAIEU = " + camaieux)
    let randz, baseColor

    if (monoChrome) {
      colors = []
      randz = Math.floor(rng.random() * palettes.length)
      colors = palettes[randz]
      randz = Math.floor(rng.random() * colors.length)
      let temp = []
      temp[0] = colors[randz]
      colors = temp
    } else if (camaieux) {
      colors = []
      baseColor = colMagenta //palettes[randz][0]
      for (let i = 0; i < 15; i++) {
        colors.push(p.color(p.hue(baseColor), p.map(i, 0, 14, p.saturation(baseColor), 0), p.map(i, 0, 14, p.brightness(baseColor), 100)));
      }
    } else {
      randz = Math.floor(myRandom(0, 1) * palettes.length)
      colors = palettes[randz]
    }
    return colors
  }


  /**
   * CREATE A GRADIENT FROM 2 COLORS
   */

  function linearGradientFill(x1: number, y1: number, x2: number, y2: number, color1: string, color2: string) {
    const ctx = p.canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.strokeStyle = gradient;
  }


  function paperTexture() {
    p.noFill()
    p.textureNum = (p.width * p.height) / 40
    p.colorMode(p.RGB)
    for (let i = 0; i < p.textureNum; i++) {
      p.stroke(myRandom(100, 150), myRandom(100, 150), myRandom(100, 150), 10) //12
      p.x = myRandom(-p.width * 0.2, p.width * 1.2)
      p.y = myRandom(-p.height * 0.2, p.height * 1.2)
      p.push()
      p.translate(p.x, p.y)
      p.strokeWeight(0.6)
      p.point(0, 0)
      p.strokeWeight(0.5)
      p.rotate(myRandom(0, p.PI * 2))
      p.curve(
        myRandom(60, 220),
        0,
        0,
        myRandom(-50, 50),
        myRandom(-50, 50),
        myRandom(60, 120),
        myRandom(60, 120),
        myRandom(60, 120)
      )
      p.pop()
    }
  }



  // ============================================ sketch



  const WH_RATIO = 1.4142 // poster ratio
  const DEBUG = false


  /*
  ** GENESIS ACCOUNT rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh
  */



  /************************************************
   * ATTENTION: NEED TO OVERRIDE xrplAddress variable before 
   * calling SeededRandom() function
   */


  // todo add option for one shape only

  let shapes = [
    "rectangle",
    "square",
    "circle",
    "disc",
    "cup",
    "arc",
    //  "lines", 
    "linesH",
    "triangle",
    "bracket"
  ]

  let w: number, h: number, frameSize: number, xrplLogo: any

  /*************************
   * Randong generator seeded from the XRPL Address
   */
  class SeededRandom {
    private seed: number;
    private readonly a: number = 1664525;
    private readonly c: number = 1013904223;
    private readonly m: number = 2 ** 32;

    constructor(xrplAddress: string) {
      // Convert the XRPL address to a seed.
      // This is a very basic conversion: summing the character codes of the address.
      // For better randomness, consider a more sophisticated hashing function.
      this.seed = Array.from(xrplAddress).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    }

    public random(): number {
      // The LCG algorithm to produce a pseudo-random number based on the current seed
      this.seed = (this.a * this.seed + this.c) % this.m;
      return this.seed / this.m;
    }
  }

  const rng = new SeededRandom(xrplAddress);

  function myRandom(mn: number, mx: number) {
    return rng.random() * (mx - mn) + mn
  }

  function randomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(rng.random() * (max - min + 1)) + min
  }


  // We use the key pressed function here
  // function keyPressed() {
  //   // If you hit the s key, save an image
  //   if (key == 's') {
  //     save("alberX-" + xrplAddress + ".png");
  //   }
  // }


  p.preload = () => {
    xrplLogo = p.loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtwAAAC2CAMAAADdh6pOAAADAFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HPQsIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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");
    console.log('xrplLogo', xrplLogo)
  }


  p.setup = () => {
    //    xrplLogo = loadImage("https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg");

    // p5 initialize
    p.noLoop()
    p.pixelDensity(1)
    p.colorMode(p.HSB)
    p.strokeCap(p.ROUND)

    monoChrome = myRandom(0, 1) < 0.95 ? false : true
    camaieux = myRandom(0, 1) < 0.75 ? false : true

    w = 1200
    h = (w * 4) / 3
    frameSize = w / 30

    loadPalette()
    colorCallback(colors)
    p.createCanvas(w, h)
    p.noLoop()
  }

  let col: any
  let callLoaded = false

  p.draw = () => {
    let randz = Math.floor(myRandom(0, 1) * bgColors.length)
    bgColor = bgColors[randz]
    p.background(bgColor)

    let rows = randomInt(2, 8)
    let cols = randomInt(3, 4)
    let shapeSize = w / (cols + 1)

    if (DEBUG) {
      console.log("ROWS = " + rows)
      console.log("COLS = " + cols)
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        randz = Math.floor(myRandom(0, 1) * colors.length)
        col = colors[randz]

        p.fill(col)

        let xPos = (w - shapeSize * cols) / 2 + i * shapeSize
        let yPos = (h - (shapeSize / 2) * rows) / 2 + j * (shapeSize / 2)

        randz = Math.floor(myRandom(0, 1) * shapes.length)
        let shape = shapes[randz]
        drawShape(shape, col, xPos, yPos, shapeSize)
      }
    }

    // Adding Texture to the drawing
    paperTexture()
    // Draw Frame around the piece
    randz = Math.floor(myRandom(0, 1) * colors.length)
    col = colors[randz]
    drawFrame(frameSize, col)

    // Display XRPL Logo
    p.imageMode(p.CENTER);
    p.image(xrplLogo, w / 2, h - frameSize * 4, w / 4, w / 4 / 366 * 41, 0, 0, xrplLogo.width, xrplLogo.height, p.CONTAIN);
    //image(xrplLogo, w/2, h - frameSize*4);

    // should be done only once
    if (callLoaded === false) {
      onLoaded({ imageData: p.canvas.toDataURL('image/webp', 0.8) })
      callLoaded = true
    }
  }

  function drawFrame(framewidth: any, color: any) {
    p.push()
    p.stroke(color)
    p.strokeWeight(framewidth * 2)
    p.fill(color)
    p.line(0, 0, p.width, 0)
    p.line(p.width, 0, p.width, p.height)
    p.line(p.width, p.height, 0, p.height)
    p.line(0, p.height, 0, 0)
    p.pop()
  }

  function drawShape(shape = "rectangle", color: any, x: any, y: any, size: any) {

    // Pick the color
    let gradient = myRandom(0, 1) > 0.85 ? true : false

    p.randz = Math.floor(myRandom(0, 1) * colors.length)
    let color2 = colors[p.randz]

    p.noStroke()

    if (gradient) {
      linearGradientFill(x, y, x + size, y + size, color, color2);
    } else {
      p.fill(color)
    }

    if (DEBUG) p.stroke("white")

    // Draw the shape 

    if (shape == "rectangle") {
      if (DEBUG) p.fill("red")
      p.rect(x, y, size, size / 2)
    } else if (shape == "square") {
      if (DEBUG) p.fill("green")
      p.rect(x, y, size, size / 2)
    } else if (shape == "circle") {
      if (DEBUG) p.fill("blue")
      let cnv = p.createGraphics(p.width, p.height);
      cnv.noStroke();
      cnv.fill(col);
      cnv.ellipse(x + size / 2, y + size / 2, size)
      cnv.erase();
      cnv.ellipse(x + size / 2, y + size / 2, size / 1.5)
      p.noErase();
      p.image(cnv, 0, 0);
    } else if (shape == "disc") {
      if (DEBUG) p.fill("blue")
      p.ellipse(x + size / 2, y + size / 2, size)
    } else if (shape == "cup") {
      if (DEBUG) p.fill("yellow")
      randomInt(0, 1)
        ? p.arc(x + size / 2, y + size / 2, size, size, p.PI, 0)
        : p.arc(x + size / 2, y + size / 2, size, size, 0, p.PI)
    } else if (shape == "arc") {
      if (DEBUG) p.fill("orange")
      randomInt(0, 1)
        ? p.arc(x + size / 2, y + size / 2, size, size, p.PI + p.HALF_PI, p.HALF_PI)
        : p.arc(x + size / 2, y + size / 2, size, size, p.HALF_PI, p.PI + p.HALF_PI)
    } else if (shape == "linesH") {
      let lineWeight = size / 24
      p.stroke(col)
      p.strokeWeight(lineWeight)
      for (let i = 0; i < 6; i++) {
        p.line(x, y + lineWeight / 2 + 2 * i * lineWeight, x + size, y + lineWeight / 2 + 2 * i * lineWeight);
      }
    } else if (shape == "lines") {
      let lineWeight = size / 50
      p.stroke(col)
      p.strokeWeight(lineWeight)
      for (let i = 0; i < 20; i++) {
        p.line(x + size / 2, y + size / 2, x + size / 2 + 2 * i * lineWeight, y);
        p.line(x + size / 2, y + size / 2, x + size / 2 - 2 * i * lineWeight, y);
      }
    } else if (shape == "triangle") {
      p.triangle(x, y, x + size / 2, y + size / 2, x + size / 2, y)
      p.triangle(x + size / 2, y, x + size / 2, y + size / 2, x + size, y)
    } else if (shape == "bracket") {
      // TODO : DRAW BRACKET - LOAD SHAPE FROM SVG
    }
  }


}

export default {
  sketch
}