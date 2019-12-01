const and = (x, y) => x & y

const or = (x, y) => x | y

const xor = (x, y) => x ^ y

const not = (x) => x === 1 ? 0 : 1

const nand = (x, y) => {
  const result = !and(x, y)
  return result ? 1 : 0
}

console.assert(and(0, 0) === 0, 'and(0, 0) === 0')
console.assert(and(0, 1) === 0, 'and(0, 1) === 0')
console.assert(and(1, 0) === 0, 'and(1, 0) === 0')
console.assert(and(1, 1) === 1, 'and(1, 1) === 1')

console.assert(or(0, 0) === 0, 'or(0, 0) === 0')
console.assert(or(0, 1) === 1, 'or(0, 1) === 1')
console.assert(or(1, 0) === 1, 'or(1, 0) === 1')
console.assert(or(1, 1) === 1, 'or(1, 1) === 1')

console.assert(not(0) === 1, 'not(0) === 1')
console.assert(not(1) === 0, 'not(1) === 0')

console.assert(xor(0, 0) === 0, 'xor(0, 0) === 1')
console.assert(xor(0, 1) === 1, 'xor(0, 1) === 0')
console.assert(xor(1, 0) === 1, 'xor(1, 1) === 0')
console.assert(xor(1, 1) === 0, 'xor(1, 1) === 1')
