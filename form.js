import { currentYear } from "./vars";
export function setupFormSubmit(form) {
    function handleFormSubmit() {
        console.log("\n", form.cardholder);
    }
    form.onsubmit = handleFormSubmit;
    console.log(
        "\n",
        form.cardholder.value,
        form["card-number"].value,
        form["expiration-date-mm"].value,
        form["expiration-date-yy"].value,
        form["card-cvc"].value
    );
}

function validateCardNumber(inputCardNumber) {
    const match = inputCardNumber.match(/^\d{13,16}$/s);
    if (!!match && match.length > 0) {
        const cardNumber = match[0];
        return cardNumber;
    }
    return null;
}

function validateCardholderName(inputCardholderName) {
    const match = inputCardholderName.match(/^(?<! )[-a-zA-Z' ]{3,26}$/s);
    if (!!match && match.length > 0) {
        const cardholderName = match[0];
        return cardholderName;
    }
    return null;
}

function validateExpDateMM(inputValidateExpDateMM) {
    const match = validateExpDateMM.match(/^\d{1,16}$/s);
    if (!!match && match.length > 0) {
        const newCard = match[0];
        return newCard;
    }
    return null;
}

function validateExpDateYY(inputValidateExpDateYY) {
    const match = inputValidateExpDateYY.match(/^\d{1,16}$/s);
    if (!!match && match.length > 0) {
        const validateExpDateYY = match[0];
        return validateExpDateYY;
    }
    return null;
}

function validateCardCVC(inputCardCVC) {
    const match = inputCardCVC.match(/^\d{3}$/s);
    if (!!match && match.length > 0) {
        const cardCVC = match[0];
        return cardCVC;
    }
    return null;
}
