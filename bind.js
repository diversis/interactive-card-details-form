export function setupCardNumberBind(input, element) {
    input.oninput = () => {
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "0000 0000 0000 0000";
            input.setAttribute("value", "");
        }

        if (inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
            input.value = inputValue;
        }
        const match = inputValue.match(/^\d{1,16}$/s);
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
        }
    };
}
1234567890987654;

export function setupCardholderNameBind(input, element) {
    input.oninput = () => {
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "JANE APPLESEED";
            input.setAttribute("value", "");
        }

        if (inputValue.length > 26) {
            inputValue = inputValue.substring(0, 26);
            input.value = inputValue;
        }
        const match = inputValue.match(/^(?<! )[-a-zA-Z' ]{2,26}$/s);
        if (!!match && match.length > 0) {
            const newCardholder = match[0];
            input.setAttribute("value", newCardholder);
            element.innerHTML = newCardholder;
        }
    };
}

export function setupCardCVCBind(input, element) {
    input.oninput = () => {
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "000";
            input.setAttribute("value", "");
        }

        if (inputValue.length > 3) {
            inputValue = inputValue.substring(0, 3);
            input.value = inputValue;
        }
        const match = inputValue.match(/^\d{1,3}$/s);
        if (!!match && match.length > 0) {
            const newCVC = inputValue.match(/^\d{1,3}$/s)[0];
            input.setAttribute("value", newCVC);

            element.innerHTML = newCVC;
        }
    };
}

export function setupCardExpMMBind(input, element) {
    input.oninput = () => {
        let inputValue = input.value.trim();

        console.log("input: ", inputValue, "\nelement: ", element);
        if (!inputValue) {
            element.innerHTML = "MM";
            input.setAttribute("value", "");
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            input.value = inputValue;
        }
        const match = inputValue.match(/^([0][1-9])|([1][0-2])$/s);
        if (!!match && match.length > 0) {
            const newExpMM = match[0];

            input.setAttribute("value", newExpMM);
            element.innerHTML = newExpMM;
        }
    };
}

export function setupCardExpYYBind(input, element) {
    input.oninput = () => {
        let inputValue = input.value.trim();
        if (!inputValue) {
            element.innerHTML = "YY";
            input.setAttribute("value", "");
        }

        if (inputValue.length > 2) {
            inputValue = inputValue.substring(0, 2);
            input.value = inputValue;
        }
        const match = inputValue.match(/^\d{1,2}$/s);
        if (!!match && match.length > 0) {
            const newExpYY = match[0];
            input.setAttribute("value", newExpYY);
            element.innerHTML = newExpYY;
        }
    };
}
