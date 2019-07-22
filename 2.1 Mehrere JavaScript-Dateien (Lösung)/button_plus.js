n = 0;

function onPlusButtonClicked() {
    n += 1;
    let divMessage = document.getElementById("message");
    divMessage.textContent = `Der Button wurde ${n} Mal gedrückt.`;
}

window.addEventListener("load", function() {
    plusButton = document.getElementById("button-plus");
    plusButton.addEventListener("click", onPlusButtonClicked);
});
