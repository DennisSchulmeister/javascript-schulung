define([], function() {

    /**
     * Datenklasse für eine Aufgabe
     */
    return class Task {
        constructor(description, employee, prio) {
            this.description = description;
            this.employee = employee;
            this.prio = parseInt(prio);
        }

        get prioText() {
            switch (this.prio) {
                case 1:
                    return "Hoch";
                    break;
                case 2:
                    return "Mittel";
                    break;
                case 3:
                    return "Niedrig";
                    break;
            }
        }
    };

});
