import {
    cardForm,
    successMessageNode,
    cardExpDateMMErrorField,
    cardExpDateYYErrorField,
    cardNumberErrorField,
    cardholderNameErrorField,
    cardCVCErrorField,
    cardExpDateMMInput,
    cardExpDateYYInput,
    cardNumberInput,
    cardholderNameInput,
    cardCVCInput,
} from "./main";
import { currentYear, currentYearDec } from "./vars";

function formReset() {
    cardExpDateMMInput.value = "";
    cardExpDateYYInput.value = "";
    cardNumberInput.value = "";
    cardholderNameInput.value = "";
    cardCVCInput.value = "";
    cardExpDateMMInput.setAttribute("value", "");
    cardExpDateYYInput.setAttribute("value", "");
    cardNumberInput.setAttribute("value", "");
    cardholderNameInput.setAttribute("value", "");
    cardCVCInput.setAttribute("value", "");
}

function showSuccessMessage() {
    formCard.hasAttribute("hidden") ? null : formCard.toggleAttribute("hidden");

    successMessageNode.hasAttribute("hidden")
        ? successMessageNode.toggleAttribute("hidden")
        : null;
}

export function setupFormSubmit() {
    cardExpDateMMInput.setCustomValidity("");
    cardExpDateYYInput.setCustomValidity("");
    cardNumberInput.setCustomValidity("");
    cardholderNameInput.setCustomValidity("");
    cardCVCInput.setCustomValidity("");

    form.onsubmit = handleFormSubmit;
}

function handleFormSubmit(e) {
    e.preventDefault();
    const data = new FormData(cardForm);

    console.log(`\ncard-number: ${data.get("card-number")} \n`);
    console.log(`\ncardholder: ${data.get("cardholder")} \n`);
    console.log(`\nexpiration-date-mm: ${data.get("expiration-date-mm")} \n`);
    console.log(`\nexpiration-date-yy: ${data.get("expiration-date-yy")} \n`);
    console.log(`\ncard-cvc: ${data.get("card-cvc")} \n`);

    let cardNumber = "";
    let cardholderName = "";
    let expDateMM = "";
    let expDateYY = "";
    let cardCVC = "";

    try {
        cardNumber = validateCardNumber(data.get("card-number").trim());
        if (!cardNumber.valid) {
            inputInvalid(
                cardNumberInput,
                cardNumberErrorField,
                cardNumber.data
            );
            // cardNumberInput.reportValidity();
        }
        cardholderName = validateCardholderName(data.get("cardholder").trim());
        if (!cardholderName.valid) {
            inputInvalid(
                cardholderNameInput,
                cardholderNameErrorField,
                cardholderName.data
            );
        }
        expDateMM = validateExpDateMM(data.get("expiration-date-mm").trim());
        if (!expDateMM.valid) {
            inputInvalid(
                cardExpDateMMInput,
                cardExpDateMMErrorField,
                expDateMM.data
            );
        }
        expDateYY = validateExpDateYY(data.get("expiration-date-yy").trim());
        if (!expDateYY.valid) {
            inputInvalid(
                cardExpDateYYInput,
                cardExpDateYYErrorField,
                expDateYY.data
            );
        }
        cardCVC = validateCardCVC(data.get("card-cvc").trim());
        if (!cardCVC.valid) {
            inputInvalid(cardCVCInput, cardCVCErrorField, cardCVC.data);
        }

        if (
            cardNumber.valid &&
            cardholderName.valid &&
            expDateMM.valid &&
            expDateYY.valid &&
            cardCVC.valid
        ) {
            console.log("Form Submit Success!");
            formReset();
            showSuccessMessage();
        }
    } catch (error) {
        console.log(error);
        return;
    }
    return;
}

function inputInvalid(input, errorField, errorMessage) {
    errorField.innerHTML = errorMessage;
    input.setCustomValidity(errorMessage);

    input.classList.toggle("input-error");
    setTimeout(() => {
        input.classList.toggle("input-error");
    }, 300);
}

function validateCardNumber(inputCardNumber) {
    if (!inputCardNumber) return { valid: false, data: "Field is Required" };
    const match = inputCardNumber.match(/^\d{13,16}$/s);
    if (!!match && match.length > 0) {
        const cardNumber = match[0];
        return { valid: true, data: cardNumber };
    }
    return { valid: false, data: "Invalid Card Number" };
}

function validateCardholderName(inputCardholderName) {
    if (!inputCardholderName)
        return { valid: false, data: "Field is Required" };
    const match = inputCardholderName.match(/^(?<! )[-a-zA-Z' ]{3,26}$/s);
    if (!!match && match.length > 0) {
        const cardholderName = match[0];
        return { valid: true, data: cardholderName };
    }
    return { valid: false, data: "Invalid Cardholder Name" };
}

function validateExpDateMM(inputExpDateMM) {
    if (!inputExpDateMM) return { valid: false, data: "Field is Required" };
    const match = inputExpDateMM.match(/^([0][1-9])|([1][0-2])$/s);
    if (!!match && match.length > 0) {
        const expDateMM = match[0];
        return { valid: true, data: expDateMM };
    }
    return { valid: false, data: "Invalid Date" };
}

function validateExpDateYY(inputExpDateYY) {
    if (!inputExpDateYY) return { valid: false, data: "Field is Required" };
    const yearRegex = new RegExp(
        `^[${currentYearDec}-${1 + +currentYearDec}][0-9]$`,
        "s"
    );

    const match = inputExpDateYY.match(yearRegex);
    if (!!match && match.length > 0) {
        const expDateYY = match[0];
        const delta = +expDateYY - +currentYear.substring(2, 4);
        console.log("delta ", delta);
        if (delta < 6 && delta >= 0) {
            return { valid: true, data: expDateYY };
        }
    }
    return { valid: false, data: "Invalid Date" };
}

function validateCardCVC(inputCardCVC) {
    if (!inputCardCVC) return { valid: false, data: "Field is Required" };
    const match = inputCardCVC.match(/^\d{3}$/s);
    if (!!match && match.length > 0) {
        const cardCVC = match[0];
        return { valid: true, data: cardCVC };
    }
    return { valid: false, data: "Invalid CVC" };
}
