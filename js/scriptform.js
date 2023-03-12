console.log("Witajcie w moim pierwszym kalkulatorze walutowym!");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const inputCurrencyElement = document.querySelector(".js-inputCurrency");
const outputCurrencyElement = document.querySelector(".js-outputCurrency");
const resultElement = document.querySelector(".js-result");

const currencyRates = {
  PLN: { PLN: 1, EUR: 1 / 4.77, USD: 1 / 4.80 },
  EUR: { EUR: 1, PLN: 4.77, USD: 0.99 },
  USD: { USD: 1, PLN: 4.80, EUR: 1 / 0.99 },
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputCurrency = inputCurrencyElement.value;
  const outputCurrency = outputCurrencyElement.value;
  const amount = amountElement.value;

  const result = amount * currencyRates[inputCurrency][outputCurrency];

  resultElement.value = result.toFixed(2);
});