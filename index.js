// .map() method creates a new array with the results of calling a function for every array element, .map() method calls the provided function once for each element in an array, in order.

const nums = [1, 3, 62, 45, 900, 76, 69]

const homemadeMap = (func, arr) => {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]))
  }
  return newArray
}

const addSomeStuff = (num) => {
  return num * num
}

homemadeMap(addSomeStuff, nums)

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const homemadeFilter = (func, arr) => {
  const newNewArray = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newNewArray.push(arr[i])
    }
  }
  return newNewArray
}

const filterSomeStuff = (num) => {
  if (num % 3 === 0) {
    return true
  }
  return false
}

homemadeFilter(filterSomeStuff, nums)

// The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator

const homemadeReduce = (func, arr, currentValue) => {
  let total = currentValue
  for (let i = 0; i < arr.length; i++) {
    total = func(total, arr[i])
  }
  return total
}

const reduceSomeStuff = (acc, cur) => {
  return acc + cur
}

homemadeReduce(reduceSomeStuff, nums, 0)
