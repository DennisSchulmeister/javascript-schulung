n = 0;

function showCounter() {
    let divMessage = document.getElementById("output-counter");
    divMessage.textContent = `Zähler: ${n}`;
}

function checkCounterRange() {
    if (n > 10) {
        n = 10;
    } else if (n < 0) {
        n = 0;
    }
}

function onPlusButtonClicked() {
    n += 1;
    checkCounterRange();
    showCounter();
}

function onMinusButtonClicked() {
    n -= 1;
    checkCounterRange();
    showCounter();
}

function onResetButtonClicked() {
    n = 0;
    checkCounterRange();
    showCounter();
}

function onKeyUp(event) {
    //console.log(event);

    switch (event.key) {
        case "ArrowUp":
        case "+":
            onPlusButtonClicked();
            break;
        case "ArrowDown":
        case "-":
            onMinusButtonClicked();
            break;
        case " ":
            onResetButtonClicked();
            break;
    }
}

window.addEventListener("load", function() {
    showCounter();

    plusButton = document.getElementById("button-plus");
    plusButton.addEventListener("click", onPlusButtonClicked);

    minusButton = document.getElementById("button-minus");
    minusButton.addEventListener("click", onMinusButtonClicked);

    resetButton = document.getElementById("button-reset");
    resetButton.addEventListener("click", onResetButtonClicked);

    window.addEventListener("keyup", onKeyUp);
});
