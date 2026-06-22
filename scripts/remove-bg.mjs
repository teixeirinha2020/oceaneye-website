import { Jimp } from "jimp"

const img = await Jimp.read("/tmp/cad-raw.png")
const { width, height, data } = img.bitmap

const idx = (x, y) => (y * width + x) * 4
const visited = new Uint8Array(width * height)
const threshold = 234 // pixels brighter than this are considered background-white

const isWhite = (x, y) => {
  const i = idx(x, y)
  return data[i] >= threshold && data[i + 1] >= threshold && data[i + 2] >= threshold
}

// Flood fill from all border pixels — only removes background connected to the edges,
// preserving the white satellite body which is enclosed by darker panel edges.
const stack = []
for (let x = 0; x < width; x++) {
  stack.push([x, 0], [x, height - 1])
}
for (let y = 0; y < height; y++) {
  stack.push([0, y], [width - 1, y])
}

while (stack.length) {
  const [x, y] = stack.pop()
  if (x < 0 || y < 0 || x >= width || y >= height) continue
  const p = y * width + x
  if (visited[p]) continue
  visited[p] = 1
  if (!isWhite(x, y)) continue
  data[idx(x, y) + 3] = 0 // make transparent
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

// Soften the edge: partially fade near-white pixels adjacent to transparent ones
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const a = idx(x, y) + 3
    if (data[a] === 0) continue
    if (!isWhite(x, y)) continue
    const neighbors = [idx(x + 1, y) + 3, idx(x - 1, y) + 3, idx(x, y + 1) + 3, idx(x, y - 1) + 3]
    if (neighbors.some((n) => data[n] === 0)) {
      data[a] = 90
    }
  }
}

await img.write("/vercel/share/v0-project/public/oceaneye-cad.png")
console.log("done", width, height)
