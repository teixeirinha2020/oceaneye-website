import { Jimp } from "jimp"
import { readFile } from "node:fs/promises"

const src = "/tmp/logo-raw.png"
const out = "/vercel/share/v0-project/public/oceaneye-logo.png"

const img = await Jimp.read(await readFile(src))
const { width, height } = img.bitmap

// Foreground (white wordmark + light-blue swoosh) has a HIGH minimum channel.
// Background (black through saturated blue) always has a LOW minimum channel.
const LOW = 90 // below this -> fully transparent
const HIGH = 175 // above this -> fully opaque

let minX = width
let minY = height
let maxX = 0
let maxY = 0

img.scan(0, 0, width, height, function (x, y, idx) {
  const r = this.bitmap.data[idx]
  const g = this.bitmap.data[idx + 1]
  const b = this.bitmap.data[idx + 2]
  const m = Math.min(r, g, b)

  let alpha
  if (m <= LOW) alpha = 0
  else if (m >= HIGH) alpha = 255
  else alpha = Math.round(((m - LOW) / (HIGH - LOW)) * 255)

  this.bitmap.data[idx + 3] = alpha

  if (alpha > 40) {
    if (x < minX) minX = x
    if (y < minY) minY = y
    if (x > maxX) maxX = x
    if (y > maxY) maxY = y
  }
})

// Crop tightly to the visible logo with a small padding.
const pad = 12
minX = Math.max(0, minX - pad)
minY = Math.max(0, minY - pad)
maxX = Math.min(width - 1, maxX + pad)
maxY = Math.min(height - 1, maxY + pad)

img.crop({
  x: minX,
  y: minY,
  w: maxX - minX + 1,
  h: maxY - minY + 1,
})

await img.write(out)
console.log("[v0] logo written", out, img.bitmap.width, "x", img.bitmap.height)
