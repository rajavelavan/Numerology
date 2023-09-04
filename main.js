document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultElement = document.getElementById("result");

    calculateBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const numerologyNumber = calculateNumerologyNumber(name);
        resultElement.textContent = `Your numerology number is ${numerologyNumber}`;
    });

    function calculateNumerologyNumber(name) {
        let total = 0;
        for (let i = 0; i < name.length; i++) {
            if (name[i] >= 'A' && name[i] <= 'Z') {
                total += name.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
            } else if (name[i] >= 'a' && name[i] <= 'z') {
                total += name.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
            }
        }
        return reduceToOneDigit(total);
    }

    function reduceToOneDigit(number) {
        if (number <= 9) {
            return number;
        }
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return reduceToOneDigit(sum);
    }
});
