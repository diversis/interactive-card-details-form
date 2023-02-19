import { setupCardNumberBind } from "./bind.js";

setupCardNumberBind(
    document.querySelector("#card-number-input"),
    document.querySelector("#card-front-number")
);
