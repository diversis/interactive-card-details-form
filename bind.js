export function setupCardNumberBind(input, element) {
    console.log("input: ", input, "\nelement: ", element);
    let number = "";

    input.oninput = () => {
        if (!input.value) {
            element.innerHTML = "0000 0000 0000 0000";
        }
        if (/\d{16}/.test(input.value)) {
            const newCard = input.value.match(/\d{16}/)[0];
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
    console.log("input: ", input, "\nelement: ", element);
    let number = "";

    input.oninput = () => {
        if (!input.value) {
            element.innerHTML = "JANE APPLESEED";
        }
        if (/\d{16}/.test(input.value)) {
            const newCard = input.value.match(/\d{16}/)[0];
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
