const and = (...nums) => {
  const result = nums.every(num => num === 1)
  return result ? 1 : 0
}
const or = (...nums) => {
  const result = nums.find(num => num === 1)
  return result ? 1 : 0
}
const nand = (x, y) => and(x, y) === 1 ? 0 : 1
const nor = (x, y) => or(x, y) === 1 ? 0 : 1

console.assert(and(0, 0, 0) === 0)
console.assert(and(0, 1, 0) === 0)
console.assert(and(1, 0, 0) === 0)
console.assert(and(1, 1, 1) === 1)

console.assert(or(0, 0) === 0)
console.assert(or(0, 1) === 1)
console.assert(or(1, 0) === 1)
console.assert(or(1, 1) === 1)

console.assert(nand(0, 0) === 1)
console.assert(nand(0, 1) === 1)
console.assert(nand(1, 0) === 1)
console.assert(nand(1, 1) === 0)

console.assert(nor(0, 0) === 1)
console.assert(nor(0, 1) === 0)
console.assert(nor(1, 0) === 0)
console.assert(nor(1, 1) === 0)
