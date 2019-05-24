tasklist = [
    new Task("JavaScript-Schulung vorbereiten", "Dennis Schulmeister-Zimolong", 2),
    new Task("Entwicklungen für Support Package abgleichen", "Entwicklungen für Support Package abgleichen", 1),
    new Task("Aufgelaufene E-Mails abarbeiten", "Dennis Schulmeister-Zimolong", 2),
];

chartdata = {
    // Namen der Mitarbeiter
    labels: [],
    series: [
        // Anzahl je Mitarbeiter
        [],
    ],
};

indexForEmployees = {};

function appendTaskToTable(task) {
    //console.log(task);
    let table = document.querySelector("#tasklist table");

    table.innerHTML += `
        <tr>
            <td>${task.description}</td>
            <td>${task.employee}</td>
            <td>${task.prioText}</td>
        </tr>
    `;
}

function updateChart() {
    tasklist.forEach(task => {
        let index = -1;

        if (task.employee in indexForEmployees) {
            index = indexForEmployees[task.employee];
        }

        if (index > -1) {
            chartdata.series[0][index] += 1;
        } else {
            indexForEmployees[task.employee] = chartdata.labels.length;
            chartdata.labels.push(task.employee);
            chartdata.series[0].push(1);
        }
    });

    barchart.update(chartdata);
}

window.addEventListener("load", () => {
    // Schaubild initialisieren
    barchart = new Chartist.Bar('#chart', chartdata);

    // Vordefinierte Einträge anzeigen
    tasklist.forEach(appendTaskToTable);
    updateChart();

    // Event Handler zum Hinzufügen neuer Einträge
    let createButton = document.getElementById("button-create");
    let inputTaskDesc = document.getElementById("input-taskdesc");
    let inputEmployee = document.getElementById("input-employee");
    let selectPrio = document.getElementById("select-prio");

    createButton.addEventListener("click", () => {
        // Neuen Eintrag speichern
        let task = new Task(inputTaskDesc.value, inputEmployee.value, selectPrio.value);
        tasklist.push(task);

        // Neuen Eintrag anzeigen
        appendTaskToTable(task);
        updateChart();

        // Eingabefelder zurücksetzen
        inputTaskDesc.value = "";
        inputEmployee.value = "";
        selectPrio.value = 1;
    });
});
