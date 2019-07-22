function showFactorial(f) {
    let divFactorial = document.getElementById("output-factorial");
    divFactorial.textContent = `Fakultät: ${f}`;
}

function onFactorialButtonClicked() {
    let f = 1;

    for (let i = 1; i <= n; i++) {
        f *= i;
    }

    showFactorial(f);
}

function onKeyUp2(event) {
    //console.log(event);

    switch (event.key) {
        case "Enter":
            onFactorialButtonClicked();
            break;
    }
}

window.addEventListener("load", function() {
    showFactorial(NaN);

    factorialButton = document.getElementById("button-factorial");
    factorialButton.addEventListener("click", onFactorialButtonClicked);

    window.addEventListener("keyup", onKeyUp2);
});
