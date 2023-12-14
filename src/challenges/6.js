function maxDistance(movements) {
  let reducedMap = {
   '>': 1,
    '<': -1,
    '*': -1
  }
  let increasedMap = {
   '>': 1,
    '<': -1,
    '*': 1
  }
  let reduced = 0
  let increased = 0
  let movement

  for (let i = 0; i < movements.length; i++) {
    movement = movements[i]
    reduced += reducedMap[movement]
    increased += increasedMap[movement]
  }

  return Math.max(Math.abs(reduced), Math.abs(increased))
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5