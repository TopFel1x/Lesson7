// Exercise 1
const countSandwiches = (obj) => Math.min(Math.floor(obj.bread / 2), obj.cheese)

console.log(countSandwiches({ bread: 5, cheese: 6 })) // -> 2

// Exercise 2
function generateMultiplicationTable(n) {
  for (i = 1; i < n + 1; i++) {
    let str = ""
    for (j = 1; j < n + 1; j++) {
      str += `${i} * ${j} = ${i * j}\t`
    }
    console.log(str)
  }
}

generateMultiplicationTable(5)

//Exercise 3
function findLongestWord(arr) {
  let len = 0
  for (i of arr) {
    if (i.length > len) {
      len = i.length
    }
  }

  return len
}

function showQuote(arr, symbol) {
  const len = findLongestWord(arr)

  console.log(symbol.repeat(len + 4))
  for (i of arr) {
    console.log(`${symbol} ${i} ${" ".repeat(len - i.length)}${symbol}`)
  }
  console.log(symbol.repeat(len + 4))
}

showQuote(["Hello", "World", "In", "JS"], "*")

// Exercise 4
function combineArrays(arr1, arr2) {
  const newArr = []

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (i < arr1.length) {
      newArr.push(arr1[i])
    }
    if (i < arr2.length) {
      newArr.push(arr2[i])
    }
  }

  return newArr
}

console.log(combineArrays([1, 2, 3], ["a", "b", "c", "d"])) // -> [1, 'a', 2, 'b', 3, 'c', 'd']

// Exercise 5
function countUniqueValues(arr) {
  const uniqueCount = {}

  for (const value of arr) {
    if (uniqueCount[value]) {
      uniqueCount[value] += 1
    } else {
      uniqueCount[value] = 1
    }
  }

  return uniqueCount
}

console.table(countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5])) // -> {1: 2, 2: 3, 3: 1, 4: 1, 5: 1}

// Exercise 6
const burgerLink = document.querySelector(".burger-link")
const burgerMenu = document.getElementById("burger-menu")
const menu = document.querySelector(".header__nav")

burgerLink.onclick = () => {
  if (!burgerMenu.classList.contains("to-exit")) {
    burgerMenu.classList.add("to-exit")
    menu.style.display = "block"
  } else {
    burgerMenu.classList.remove("to-exit")
    menu.style.display = "none"
  }
}

// Exericse 7
const toast = document.querySelector(".toast")
const closeButton = document.querySelector(".close-button")
const name = document.querySelector(".toast__name")
const message = document.querySelector(".toast__message")
const obj = { name: "Fel", message: "Hi, baby" }

name.textContent = obj.name
message.textContent = obj.message

closeButton.addEventListener("click", () => {
  toast.classList.remove("show")
})

setTimeout(() => {
  toast.classList.add("show")
}, 2000)
