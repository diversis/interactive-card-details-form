import { currentYear, currentYearDec } from "./vars";
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

export function setupCardNumberBind(input, element) {
    cardNumberInput = input;
    cardNumberErrorField =
        input.parentElement.querySelector("#error-card-number");
    updateValue();

    function updateValue() {
        input.value = input.value.replace(/\D/g, "");
        let inputValue = input.value.trim();
        cardNumberErrorField.innerHTML = "";
        input.setCustomValidity("");
        if (!inputValue) {
            element.innerHTML = "0000 0000 0000 0000";
            input.setAttribute("value", "");

            return;
        }

        if (inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
            input.value = inputValue;
            input.setCustomValidity("Number too long. Max 16 digits");
            cardNumberErrorField.innerHTML = "Number too long. Max 16 digits";
            setTimeout(() => {
                cardNumberErrorField.innerHTML = "";
                input.setCustomValidity("");
            }, 3000);
            return;
        }
        const match = inputValue.match(/^\d{1,16}$/s);
        console.log("number match: ", match);
        if (!!match && match.length > 0) {
            const newCard = match[0];
            input.setAttribute("value", newCard);

            element.innerHTML =
                "" +
                newCard.substring(0, 4) +
                " " +
                newCard.substring(4, 8) +
                " " +
                newCard.substring(8, 12) +
                " " +
                newCard.substring(12);
            return;
        }
        cardNumberErrorField.innerHTML = "Invalid Number";
    }
    input.oninput = updateValue;
    input.onchange = updateValue;
}

export function setupCardholderNameBind(input, element) {
    cardholderNameInput = input;
    cardholderNameErrorField = input.parentElement.querySelector(
        "#error-cardholder-name"
    );
    updateValue();

    function updateValue() {
        cardholderNameErrorField.innerHTML = "";
        input.setCustomValidity("");
        input.value = input.value.replace(/[^-a-zA-Z' ]/g, "");
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "JANE APPLESEED";
            input.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 26) {
            inputValue = inputValue.substring(0, 26);
            input.value = inputValue;
            cardholderNameErrorField.innerHTML =
                "Name too long. max 26 characters";
            setTimeout(() => {
                cardholderNameErrorField.innerHTML = "";
            }, 3000);
            return;
        }
        const match = inputValue.match(/^(?<! )[-a-zA-Z' ]{1,26}$/s);
        if (!!match && match.length > 0) {
            const newCardholder = match[0];
            input.setAttribute("value", newCardholder);
            element.innerHTML = newCardholder;
            return;
        }
        cardholderNameErrorField.innerHTML = "invalid name";
    }
    input.oninput = updateValue;
}

export function setupCardCVCBind(input, element) {
    cardCVCInput = input;
    cardCVCErrorField = input.parentElement.querySelector("#error-card-cvc");
    updateValue();

    function updateValue() {
        cardCVCErrorField.innerHTML = "";
        input.setCustomValidity("");
        input.value = input.value.replace(/\D/g, "");
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "000";
            input.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 3) {
            inputValue = inputValue.substring(0, 3);
            input.value = inputValue;
            cardCVCErrorField.innerHTML = "Max 3 digits";
            setTimeout(() => {
                cardCVCErrorField.innerHTML = "";
            }, 3000);
            return;
        }
        const match = inputValue.match(/^\d{1,3}$/s);
        if (!!match && match.length > 0) {
            const newCVC = inputValue.match(/^\d{1,3}$/s)[0];
            input.setAttribute("value", newCVC);

            element.innerHTML = newCVC;
            return;
        }
        cardCVCErrorField.innerHTML = "Invalid CVC";
    }
    input.oninput = updateValue;
}

export function setupCardExpMMBind(input, element) {
    cardExpDateMMErrorField = input.parentElement.querySelector(
        "#error-expiration-date-mm"
    );

    cardExpDateMMInput = input;
    updateValue();
    function updateValue() {
        cardExpDateMMErrorField.innerHTML = "";
        input.setCustomValidity("");
        input.value = input.value.replace(/\D/g, "");
        let inputValue = input.value.trim();

        console.log("input: ", inputValue, "\nelement: ", element);
        if (!inputValue) {
            element.innerHTML = "MM";
            input.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            input.value = inputValue;
            cardExpDateMMErrorField.innerHTML = "Max 2 digits";
            setTimeout(() => {
                cardExpDateMMErrorField.innerHTML = "";
            }, 3000);
            return;
        }
        const match = inputValue.match(/^([0][1-9])|([1][0-2])$/s);
        if (!!match && match.length > 0) {
            const newExpMM = match[0];

            input.setAttribute("value", newExpMM);
            element.innerHTML = newExpMM;
            return;
        }
        cardExpDateMMErrorField.innerHTML = "Invalid Date";
    }
    input.oninput = updateValue;
}

export function setupCardExpYYBind(input, element) {
    cardExpDateYYErrorField = input.parentElement.querySelector(
        "#error-expiration-date-yy"
    );
    cardExpDateYYInput = input;
    input.value = input.value.replace(/\D/g, "");
    const yearRegex = new RegExp(
        `^[${currentYearDec}-${1 + +currentYearDec}][0-9]$`,
        "s"
    );
    // input.setAttribute(
    //     "pattern",
    //     `[${currentYearDec}-${1 + +currentYearDec}][0-9]$`
    // );

    updateValue();

    function updateValue() {
        cardExpDateYYErrorField.innerHTML = "";
        input.setCustomValidity("");
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "YY";
            input.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            input.value = inputValue;
            cardExpDateYYErrorField.innerHTML = "Max 2 digits";
            setTimeout(() => {
                cardExpDateYYErrorField.innerHTML = "";
            }, 3000);
            return;
        }

        console.log(yearRegex.toString());
        const match = inputValue.match(yearRegex);

        if (!!match && match.length > 0) {
            const newExpYY = match[0];
            const delta = +newExpYY - +currentYear.substring(2, 4);
            console.log("delta ", delta);
            if (delta < 6 && delta >= 0) {
                input.setAttribute("value", newExpYY);
                element.innerHTML = newExpYY;
            }
            return;
        }
        cardExpDateYYErrorField.innerHTML = "Invalid Date";
    }
    input.oninput = updateValue;
}
