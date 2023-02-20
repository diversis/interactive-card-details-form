import {
    setupCardNumberBind,
    setupCardCVCBind,
    setupCardholderNameBind,
    setupCardExpMMBind,
    setupCardExpYYBind,
} from "./bind.js";
import { setupFormSubmit, showForm } from "./form.js";
if (window) {
    setupCardNumberBind(
        document.querySelector("#card-number"),
        document.querySelector("#card-front-number")
    );

    setupCardCVCBind(
        document.querySelector("#card-cvc"),
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

    setupFormSubmit(document.querySelector("#form-card"));
    document.querySelector("#reset-form").onclick = showForm;
}
