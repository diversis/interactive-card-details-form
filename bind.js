import {
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
    cardExpDateMMPreview,
    cardExpDateYYPreview,
    cardNumberPreview,
    cardholderNamePreview,
    cardCVCPreview,
} from "./main";
import { currentYear, currentYearDec } from "./vars";

export function setupCardNumberBind() {
    updateValue();

    function updateValue() {
        cardNumberInput.value = cardNumberInput.value.replace(/\D/g, "");
        let inputValue = cardNumberInput.value.trim();
        cardNumberErrorField.innerHTML = "";
        cardNumberInput.setCustomValidity("");
        if (!inputValue) {
            cardNumberPreview.innerHTML = "0000 0000 0000 0000";
            cardNumberInput.setAttribute("value", "");

            return;
        }

        if (inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
            cardNumberInput.value = inputValue;
            cardNumberInput.setCustomValidity("Number too long. Max 16 digits");
            cardNumberErrorField.innerHTML = "Number too long. Max 16 digits";
            setTimeout(() => {
                cardNumberErrorField.innerHTML = "";
                cardNumberInput.setCustomValidity("");
            }, 3000);
            return;
        }
        const match = inputValue.match(/^\d{1,16}$/s);

        if (!!match && match.length > 0) {
            const newCard = match[0];
            cardNumberInput.setAttribute("value", newCard);

            cardNumberPreview.innerHTML =
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
    cardNumberInput.oninput = updateValue;
    cardNumberInput.onchange = updateValue;
}

export function setupCardholderNameBind() {
    updateValue();

    function updateValue() {
        cardholderNameErrorField.innerHTML = "";
        cardholderNameInput.setCustomValidity("");
        cardholderNameInput.value = cardholderNameInput.value.replace(
            /[^-a-zA-Z' ]/g,
            ""
        );
        let inputValue = cardholderNameInput.value.trim();
        if (!inputValue) {
            cardholderNamePreview.innerHTML = "JANE APPLESEED";
            cardholderNameInput.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 26) {
            inputValue = inputValue.substring(0, 26);
            cardholderNameInput.value = inputValue;
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
            cardholderNameInput.setAttribute("value", newCardholder);
            cardholderNamePreview.innerHTML = newCardholder;
            return;
        }
        cardholderNameErrorField.innerHTML = "invalid name";
    }
    cardholderNameInput.oninput = updateValue;
}

export function setupCardCVCBind() {
    updateValue();

    function updateValue() {
        cardCVCErrorField.innerHTML = "";
        cardCVCInput.setCustomValidity("");
        cardCVCInput.value = cardCVCInput.value.replace(/\D/g, "");
        let inputValue = cardCVCInput.value.trim();
        if (!inputValue) {
            cardCVCPreview.innerHTML = "000";
            cardCVCInput.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 3) {
            inputValue = inputValue.substring(0, 3);
            cardCVCInput.value = inputValue;
            cardCVCErrorField.innerHTML = "Max 3 digits";
            setTimeout(() => {
                cardCVCErrorField.innerHTML = "";
            }, 3000);
            return;
        }
        const match = inputValue.match(/^\d{1,3}$/s);
        if (!!match && match.length > 0) {
            const newCVC = inputValue.match(/^\d{1,3}$/s)[0];
            cardCVCInput.setAttribute("value", newCVC);

            cardCVCPreview.innerHTML = newCVC;
            return;
        }
        cardCVCErrorField.innerHTML = "Invalid CVC";
    }
    cardCVCInput.oninput = updateValue;
}

export function setupCardExpMMBind() {
    updateValue();
    function updateValue() {
        cardExpDateMMErrorField.innerHTML = "";
        cardExpDateMMInput.setCustomValidity("");
        cardExpDateMMInput.value = cardExpDateMMInput.value.replace(/\D/g, "");
        let inputValue = cardExpDateMMInput.value.trim();

        if (!inputValue) {
            cardExpDateMMPreview.innerHTML = "MM";
            cardExpDateMMInput.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            cardExpDateMMInput.value = inputValue;
            cardExpDateMMErrorField.innerHTML = "Max 2 digits";
            setTimeout(() => {
                cardExpDateMMErrorField.innerHTML = "";
            }, 3000);
            return;
        }
        const match = inputValue.match(/^([0][1-9])|([1][0-2])$/s);
        if (!!match && match.length > 0) {
            const newExpMM = match[0];

            cardExpDateMMInput.setAttribute("value", newExpMM);
            cardExpDateMMPreview.innerHTML = newExpMM;
            return;
        }
        cardExpDateMMErrorField.innerHTML = "Invalid Date";
    }
    cardExpDateMMInput.oninput = updateValue;
}

export function setupCardExpYYBind() {
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
        cardExpDateYYInput.setCustomValidity("");
        cardExpDateYYInput.value = cardExpDateYYInput.value.replace(/\D/g, "");
        let inputValue = cardExpDateYYInput.value.trim();
        if (!inputValue) {
            cardExpDateYYPreview.innerHTML = "YY";
            cardExpDateYYInput.setAttribute("value", "");
            return;
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            cardExpDateYYInput.value = inputValue;
            cardExpDateYYErrorField.innerHTML = "Max 2 digits";
            setTimeout(() => {
                cardExpDateYYErrorField.innerHTML = "";
            }, 3000);
            return;
        }

        const match = inputValue.match(yearRegex);

        if (!!match && match.length > 0) {
            const newExpYY = match[0];
            const delta = +newExpYY - +currentYear.substring(2, 4);

            if (delta < 6 && delta >= 0) {
                cardExpDateYYInput.setAttribute("value", newExpYY);
                cardExpDateYYPreview.innerHTML = newExpYY;
            }
            return;
        }
        cardExpDateYYErrorField.innerHTML = "Invalid Date";
    }
    cardExpDateYYInput.oninput = updateValue;
}
