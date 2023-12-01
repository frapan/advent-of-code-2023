const path = require("path")
const { readFileSync } = require("fs")

const input = readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")

const lines = input.split(/\r?\n/)

const tokens = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
]

let value = 0
for (const line of lines) {
  let first, last
  for (let i = 0; i < line.length; i++) {
    if (line[i] >= 1 && line[i] <= 9) {
      first = first || line[i]
      last = line[i]
    } else {
      for (let t = 0; t < tokens.length; t++) {
        if (line.substring(i).startsWith(tokens[t])) {
          first = first || String(t + 1)
          last = String(t + 1)
        }
      }
    }
  }
  value = value + Number(first + last)
}

console.log(value)
