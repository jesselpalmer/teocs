const or = (...nums) => {
  const result = nums.find(num => num === 1)
  return result ? 1 : 0
}

module.exports = or
