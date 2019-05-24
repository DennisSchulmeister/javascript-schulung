function onResetButtonClicked() {
    n = -1;
    onPlusButtonClicked();
}

window.addEventListener("load", function() {
    resetButton = document.getElementById("button-reset");
    resetButton.addEventListener("click", onResetButtonClicked);
});
