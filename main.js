import {
    setupCardNumberBind,
    setupCardCVCBind,
    setupCardholderNameBind,
    setupCardExpMMBind,
    setupCardExpYYBind,
} from "./bind.js";

setupCardNumberBind(
    document.querySelector("#card-number-input"),
    document.querySelector("#card-front-number")
);

setupCardCVCBind(
    document.querySelector("#card-cvc-input"),
    document.querySelector("#card-back-cvc")
);

setupCardholderNameBind(
    document.querySelector("#cardholder-name"),
    document.querySelector("#card-front-cardholder")
);

setupCardExpMMBind(
    document.querySelector("#expiration-date-mm"),
    document.querySelector("#card-front-mm")
);

setupCardExpYYBind(
    document.querySelector("#expiration-date-yy"),
    document.querySelector("#card-front-yy")
);
