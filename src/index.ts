export const maxArray = (arr: number[], max = -Infinity): number => {

  let sum=0

  for (const number of arr) {
    sum += number
    if (sum > max) {
      max = sum
    }
  }
  
  arr.shift()

  if (arr.length === 0) {
    return max
  }
  return maxArray(arr, max)
}