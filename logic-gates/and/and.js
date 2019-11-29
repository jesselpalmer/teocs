const and = (...nums) => {
  const result = nums.every(num => num === 1)
  return result ? 1 : 0
}

module.exports = and
