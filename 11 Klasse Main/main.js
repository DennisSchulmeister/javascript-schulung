/**
 * Hauptklasse des Programms
 */
class Main {
    constructor() {
        this.tasklist = [
            new Task("JavaScript-Schulung vorbereiten", "Dennis Schulmeister-Zimolong", 2),
            new Task("Entwicklungen für Support Package abgleichen", "Entwicklungen für Support Package abgleichen", 1),
            new Task("Aufgelaufene E-Mails abarbeiten", "Dennis Schulmeister-Zimolong", 2),
        ];

        this.chartdata = {
            // Namen der Mitarbeiter
            labels: [],
            series: [
                // Anzahl je Mitarbeiter
                [],
            ],
        };

        this.indexForEmployees = {};
        this.barchart = undefined;
    }

    appendTaskToTable(task) {
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

    updateChart() {
        this.tasklist.forEach(task => {
            let index = -1;

            if (task.employee in this.indexForEmployees) {
                index = this.indexForEmployees[task.employee];
            }

            if (index > -1) {
                this.chartdata.series[0][index] += 1;
            } else {
                this.indexForEmployees[task.employee] = this.chartdata.labels.length;
                this.chartdata.labels.push(task.employee);
                this.chartdata.series[0].push(1);
            }
        });

        this.barchart.update(this.chartdata);
    }

    onLoad() {
        // Schaubild initialisieren
        this.barchart = new Chartist.Bar('#chart', this.chartdata);

        // Vordefinierte Einträge anzeigen
        this.tasklist.forEach(this.appendTaskToTable);
        this.updateChart();

        // Event Handler zum Hinzufügen neuer Einträge
        let createButton = document.getElementById("button-create");
        let inputTaskDesc = document.getElementById("input-taskdesc");
        let inputEmployee = document.getElementById("input-employee");
        let selectPrio = document.getElementById("select-prio");

        createButton.addEventListener("click", () => {
            // Eingabeprüfung (Bonusaufgabe)
            if (!inputTaskDesc.value.trim()) {
                alert("Geben Sie erst eine Aufgabenbeschreibung ein.");
                return;
            }

            if (!inputEmployee.value.trim()) {
                alert("Tragen Sie erst einen zuständigen Mitarbeiter ein.");
                return;
            }

            // Neuen Eintrag speichern
            let task = new Task(inputTaskDesc.value, inputEmployee.value, selectPrio.value);
            this.tasklist.push(task);

            // Neuen Eintrag anzeigen
            this.appendTaskToTable(task);
            this.updateChart();

            // Eingabefelder zurücksetzen
            inputTaskDesc.value = "";
            inputEmployee.value = "";
            selectPrio.value = 1;
        });
    }
}
