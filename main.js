import {
    setupCardNumberBind,
    setupCardCVCBind,
    setupCardholderNameBind,
    setupCardExpMMBind,
    setupCardExpYYBind,
} from "./bind.js";
import { setupFormSubmit, setupSuccessMessage } from "./form.js";

export let cardNumberErrorField;
export let cardholderNameErrorField;
export let cardExpDateMMErrorField;
export let cardExpDateYYErrorField;
export let cardCVCErrorField;

export let cardNumberInput;
export let cardholderNameInput;
export let cardExpDateMMInput;
export let cardExpDateYYInput;
export let cardCVCInput;

export let cardNumberPreview;
export let cardholderNamePreview;
export let cardExpDateMMPreview;
export let cardExpDateYYPreview;
export let cardCVCPreview;

export let successMessageNode;

export let cardForm;

export function formReset() {
    cardExpDateMMInput.value = "";
    cardExpDateYYInput.value = "";
    cardNumberInput.value = "";
    cardholderNameInput.value = "";
    cardCVCInput.value = "";
    cardExpDateMMPreview.innerHTML = "00";
    cardExpDateYYPreview.innerHTML = "00";
    cardNumberPreview.innerHTML = "0000 0000 0000 0000";
    cardholderNamePreview.innerHTML = "Jane Appleseed";
    cardCVCPreview.innerHTML = "000";
    cardExpDateMMInput.setAttribute("value", "");
    cardExpDateYYInput.setAttribute("value", "");
    cardNumberInput.setAttribute("value", "");
    cardholderNameInput.setAttribute("value", "");
    cardCVCInput.setAttribute("value", "");
    cardExpDateMMInput.setCustomValidity("");
    cardExpDateYYInput.setCustomValidity("");
    cardNumberInput.setCustomValidity("");
    cardholderNameInput.setCustomValidity("");
    cardCVCInput.setCustomValidity("");
}

if (window) {
    cardNumberInput = document.querySelector("#card-number");
    cardholderNameInput = document.querySelector("#cardholder-name");
    cardExpDateMMInput = document.querySelector("#expiration-date-mm");
    cardExpDateYYInput = document.querySelector("#expiration-date-yy");
    cardCVCInput = document.querySelector("#card-cvc");

    cardNumberErrorField =
        cardNumberInput.parentElement.querySelector("#error-card-number");
    cardholderNameErrorField = cardholderNameInput.parentElement.querySelector(
        "#error-cardholder-name"
    );
    cardExpDateMMErrorField = cardExpDateMMInput.parentElement.querySelector(
        "#error-expiration-date-mm"
    );
    cardExpDateYYErrorField = cardExpDateYYInput.parentElement.querySelector(
        "#error-expiration-date-yy"
    );
    cardCVCErrorField =
        cardCVCInput.parentElement.querySelector("#error-card-cvc");

    cardNumberPreview = document.querySelector("#card-front-number");
    cardholderNamePreview = document.querySelector("#card-front-cardholder");
    cardExpDateMMPreview = document.querySelector("#card-front-mm");
    cardExpDateYYPreview = document.querySelector("#card-front-yy");
    cardCVCPreview = document.querySelector("#card-back-cvc");

    cardForm = document.querySelector("#card-form");

    successMessageNode = document.querySelector("#form-success");

    setupCardNumberBind();

    setupCardCVCBind();

    setupCardholderNameBind();

    setupCardExpMMBind();

    setupCardExpYYBind();

    setupFormSubmit();
    setupSuccessMessage();
}
