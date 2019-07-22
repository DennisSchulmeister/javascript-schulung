window.addEventListener("load", function() {
    n = 0;

    function onPlusButtonClicked() {
        n += 1;
        let divMessage = document.getElementById("message");
        divMessage.textContent = `Der Button wurde ${n} Mal gedrückt.`;
    }

    function onResetButtonClicked() {
        n = -1;
        onPlusButtonClicked();
    }

    plusButton = document.getElementById("button-plus");
    plusButton.addEventListener("click", onPlusButtonClicked);

    resetButton = document.getElementById("button-reset");
    resetButton.addEventListener("click", onResetButtonClicked);
});
