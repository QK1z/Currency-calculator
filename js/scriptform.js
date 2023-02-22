console.log("Witajcie w moim pierwszym kalkulatorze walutowym!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");
let eurToPln = 4.77;
let usdToPln = 4.80;
let eurToUsd = 0.99;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;
    let amount = amountElement.value;

    switch (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount / eurToPln);
            else if (outputCurrency === "USD") result = (amount / usdToPln);
            break;

        case "EUR":
            if (outputCurrency === "EUR") result = (amount * 1);
            else if (outputCurrency === "PLN") result = (amount * eurToPln);
            else if (outputCurrency === "USD") result = (amount * eurToUsd);
            break;
            
        case "USD":
            if (outputCurrency === "USD") result = (amount * 1);
            else if (outputCurrency === "PLN") result = (amount * usdToPln);
            else if (outputCurrency === "EUR") result = (amount / eurToUsd);
            break;
    }
    resultElement.value = result.toFixed(2);
});