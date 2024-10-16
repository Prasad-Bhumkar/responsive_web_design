const cardNumberElement = document.querySelector('.card-number');
const cardHolderNameElement = document.querySelector('.card-holder-name');
const cardExpirationElement = document.querySelector('.card-expiration');

const cardholderNameInput = document.getElementById('cardholder-name');
const cardNumberInput = document.getElementById('card-number');
const expirationMonthSelect = document.getElementById('expiration-month');
const expirationYearSelect = document.getElementById('expiration-year');

cardholderNameInput.addEventListener('input', () => {
    cardHolderNameElement.textContent = cardholderNameInput.value || 'Full Name';
});

cardNumberInput.addEventListener('input', () => {
    cardNumberElement.textContent = formatCardNumber(cardNumberInput.value);
});

expirationMonthSelect.addEventListener('change', updateExpiration);
expirationYearSelect.addEventListener('change', updateExpiration);

function updateExpiration() {
    cardExpirationElement.textContent = `${expirationMonthSelect.value || 'MM'}/${expirationYearSelect.value || 'YY'}`;
}

function formatCardNumber(number) {
    return number.replace(/\s/g, '').replace(/(\d{4})(?=(\d{4})+$)/g, '$1 ');
}s