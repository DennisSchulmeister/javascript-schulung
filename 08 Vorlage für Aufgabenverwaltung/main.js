tasklist = [
    {
        description: "JavaScript-Schulung vorbereiten",
        employee: "Dennis Schulmeister-Zimolong",
        prio: 2,
    },
    {
        description: "Entwicklungen für Support Package abgleichen",
        employee: "Alle",
        prio: 1,
    },
    {
        description: "Aufgelaufene E-Mails abarbeiten",
        employee: "Dennis Schulmeister-Zimolong",
        prio: 2,
    }
];

chartdata = {
    // Namen der Mitarbeiter
    labels: ["Mitarbeiter 1", "Mitarbeiter 2", "Mitarbeiter 3"],
    series: [
        // Anzahl je Mitarbeiter
        [8,5,10],
    ],
};

window.addEventListener("load", function() {
    // Schaubild initialisieren
    barchart = new Chartist.Bar('#chart', chartdata);
});
