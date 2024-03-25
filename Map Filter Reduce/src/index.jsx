let fibanocci = [1, 2, 3, 5, 8, 13, 21, 34]

// Map - Create a new array by doing something with each item in an array.
let tripleFibanocci = fibanocci.map((num) => num * 3)
console.log(`Map: ${tripleFibanocci}`)

// Filter - Create a new array by keeping the items that return true.
let evenFibanocci = fibanocci.filter((num) => num % 2 === 0)
console.log(`Filter: ${evenFibanocci}`)

// Reduce - Accumulate a value by doing something to each item in an array.
let sumFibanocci = fibanocci.reduce((accumulator, num) => accumulator + num)
console.log(`Reduce: ${sumFibanocci}`)

// Find - find the first item that matches from an array.
let findFibanocci = fibanocci.find((num) => num > 10)
console.log(`Find: ${findFibanocci}`)

// FindIndex - find the index of the first item that matches.
let findIndexFibanocci = fibanocci.findIndex((num) => num > 10)
console.log(`FindIndex: ${findIndexFibanocci}`)
