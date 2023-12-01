const path = require("path")
const { readFileSync } = require("fs")

const input = readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")

const lines = input.split(/\r?\n/)

const value = lines.reduce((acc, line) => {
  const numbers = [...line.matchAll(/\d/g)]
  return acc + Number(numbers[0] + numbers[numbers.length - 1])
}, 0)

console.log(value)
