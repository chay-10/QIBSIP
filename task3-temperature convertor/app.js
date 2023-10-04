document.addEventListener("DOMContentLoaded", function () {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const submitButton = document.getElementById("submit");
    const result = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const celsius = parseFloat(cInput.value);
        const fahrenheit = parseFloat(fInput.value);

        if (!isNaN(celsius)) {
            const convertedFahrenheit = (celsius * 9/5) + 32;
            result.textContent = `Result: ${convertedFahrenheit.toFixed(2)}°F`;
        } else if (!isNaN(fahrenheit)) {
            const convertedCelsius = (fahrenheit - 32) * 5/9;
            result.textContent = `Result: ${convertedCelsius.toFixed(2)}°C`;
        } else {
            result.textContent = "Please enter a valid temperature value.";
        }
    });
});
