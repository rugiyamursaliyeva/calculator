const display = document.getElementById("display")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")

const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")

numbers.forEach(number => {
    number.addEventListener("click", function () {
        display.value += number.textContent
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", function () {
        display.value += operator.textContent
    })
})

equal.addEventListener("click", () => {
    display.value = eval(display.value)
})

clear.addEventListener("click", () => {
    display.value = ""
})