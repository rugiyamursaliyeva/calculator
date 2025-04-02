const display = document.getElementById("display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

numbers.forEach(number => {
    number.addEventListener("click", function () {
        display.value += number.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", function () {
        display.value += operator.textContent;
    });
});

function calculate() {
    try {
        display.value = eval(display.value); // String-i riyazi hesablama üçün eval-a verir
    } catch {
        display.value = "Error"; // Səhv daxil edilərsə
    }
}

equal.addEventListener("click", calculate);

clear.addEventListener("click", () => {
    display.value = "";
});

// Enter düyməsi ilə hesablasın
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});
