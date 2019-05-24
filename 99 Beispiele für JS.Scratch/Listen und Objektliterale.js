// Diese Demo zeigt Ihnen, was Listen und Dictionaries
// sind und wie sie verwendet werden.

// In den vorherigen Beispielen haben Sie bereits
// einfache Variablen und Funktionen kennen gelernt.
// Dabei haben Sie gelernt, dass Variablen immer mit
// "var" oder "let" definiert werden sollten.
var fastRichtig = 43;
function test() {
    console.log("test() aufgerufen");
}
/*** [RESULT]
 ***/

// Zwei wichtige Datentypen für JavaScript sind Listen
// und Objekte. Sie habe folgende Bedeutung:

// Listen sind dasselbe wie Arrays in anderen Sprachen. Sie werden
// daher häufig auch Arrays genannt. Ihre Einträge haben eine feste
// Reihenfolge und der Zugriff erolgt daher auch über den Index.
// Beachten Sie: Das erste Element hat immer den Index 0.

// Die Definition ist super einfach:
var liste = [0, 8, 15, 0, 7, 21];
liste
/*** [RESULT]
 *** array:1 [
 ***     0: number 0,
 ***     1: number 8,
 ***     2: number 15,
 ***     3: number 0,
 ***     4: number 7,
 ***     5: number 21,
 *** ]
 ***/

liste[0]
/*** [RESULT]
 *** number 0
 ***/
liste[1]
/*** [RESULT]
 *** number 8
 ***/
liste[5]
/*** [RESULT]
 *** number 21
 ***/
liste[6]
/*** [RESULT]
 ***/

// Aha, liste[6] liefert also kein Ergebnis. Technisch gesehen,
// wird der Wert undefined zurückgegeben, den zeigt JS.Scratch
// aber nicht an, weil undefined auch bedeuten kann, dass ein
// Attribut noch nicht existiert oder eine Funktion keinen
// Rückgabewert hatte.
liste[6] == undefined
/*** [RESULT]
 *** boolean true
 ***/

// Die Länge der Liste steht im Attribut "length".
liste.length;
/*** [RESULT]
 *** number 6
 ***/

for (var i = 0; i < liste.length; i++) {
    console.log("index " + i + " = " + liste[i]);
}
/*** [OUTPUT]
 *** index 0 = 0
 ***/

// Neue Einträge werden mit der Methode push() hinzugefügt.
liste.push(47);
liste.push(11);
liste
/*** [RESULT]
 *** array:1 [
 ***     0: number 0,
 ***     1: number 8,
 ***     2: number 15,
 ***     3: number 0,
 ***     4: number 7,
 ***     5: number 21,
 ***     6: number 47,
 ***     7: number 11,
 *** ]
 ***/

// Mit push und pop lässt sich eine Liste auch als Keller-Speicher
// (Stack) verwenden
stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack;
/*** [RESULT]
 *** array:2 [
 ***     0: number 1,
 ***     1: number 2,
 ***     2: number 3,
 ***     3: number 4,
 *** ]
 ***/

stack.pop();
/*** [RESULT]
 *** number 4
 ***/
stack.pop();
/*** [RESULT]
 *** number 3
 ***/
stack.pop();
/*** [RESULT]
 *** number 2
 ***/

stack;
/*** [RESULT]
 *** array:2 [
 ***     0: number 1,
 *** ]
 ***/

// Sie haben sich schon bemerkt, dass nirgendswo gesagt wurde, welchen
// Datentyp die Einträge der Liste haben sollen. Gut aufgepasst. Denn
// das ist gar nicht nötig. Für Arrays gilt dasselbe wie für einfache
// Variablen: Der Typ ergibt sich aus dem Inhalt. Allerdings dürfen
// Sie in einem Array beliebig mischen!
[60, 90, 60, "Eitel Sonnenschein", ["JavaScript", "rocks!"], undefined]
/*** [RESULT]
 *** array:3 [
 ***     0: number 60,
 ***     1: number 90,
 ***     2: number 60,
 ***     3: string "Eitel Sonnenschein",
 ***     4: array:4 [
 ***         0: string "JavaScript",
 ***         1: string "rocks!",
 ***     ],
 ***     5: null,
 *** ]
 ***/

// Wenn Sie das alles verstanden haben, sind Objektliterale auch nicht
// schwer zu verstehen. Anders als bei Listen hat ihr Inhalt keine
// Reihenfolge und man kann deshalb auch nicht über einen Index zugreifen.
// Stattdessen besitzt jeder Eintrag einen "Key", mit dem er wieder
// ausgelesen werden kann. Der Key ist immer ein String und muss
// eindeutig sein.

// Die Definition erfolgt mit geschweiften Klammern, statt mit eckigen
// Klammern. Die Keys werden durch einen Doppelpunkt vom Wert getrennt.
// Ggf. müssen die Keys in Anführungszeichen geschrieben werden.
noten = {
    mueller: 1.8,
    mayer: 2.4,
    "schulz": 2.2,
}
/*** [RESULT]
 *** object:5 {
 ***     mayer: number 2.4,
 ***     mueller: number 1.8,
 ***     schulz: number 2.2,
 *** }
 ***/

// Einzelne Werte werden ebenfalls mit [] gelesen
noten["mayer"];
/*** [RESULT]
 *** number 2.4
 ***/

name = "schulz";
noten[name];
/*** [RESULT]
 *** number 2.2
 ***/

// Anstatt [] kann auch der Punkt verwendet werden
noten.mayer
/*** [RESULT]
 *** number 2.4
 ***/

// Mit beiden Schreibweisen können auch Einträge
// nachträglich hinzugefügt werden.
noten.becker = 3.1;
noten["fröhlich"] = 1.2;
/*** [RESULT]
 *** number 1.2
 ***/

noten.fröhlich
/*** [RESULT]
 *** number 1.2
 ***/
noten["becker"]
/*** [RESULT]
 *** number 3.1
 ***/

// Natürlich können auch die Inhalte eines Objekts verschiedene Typen haben
album = {
    name: "Fire It Up!",
    year: 2012,
    tracks: [
        "Fire it up",
        "I'll be your doctor",
        "You love me back",
        "I come in peace",
    ]
}
/*** [RESULT]
 *** object:6 {
 ***     name: string "Fire It Up!",
 ***     tracks: array:7 [
 ***         0: string "Fire it up",
 ***         1: string "I'll be your doctor",
 ***         2: string "You love me back",
 ***         3: string "I come in peace",
 ***     ],
 ***     year: number 2012,
 *** }
 ***/

// Im Beispiel oben enthält das Objekt eine Liste.
// Umgekehrt geht es natürlich auch.
albums = [
    {
        name: "Hard Knocks",
        year: 2010,
        tracks: [
            "Hard kocks",
            "Get on",
            "Unforgiven",
            "The fall",
        ],
    },
    {
        name: "Fire It Up!",
        year: 2012,
        tracks: [
            "Fire it up",
            "I'll be your doctor",
            "You love me back",
            "I come in peace",
        ],
    }
];
/*** [RESULT]
 *** array:8 [
 ***     0: object:9 {
 ***         name: string "Hard Knocks",
 ***         tracks: array:10 [
 ***             0: string "Hard kocks",
 ***             1: string "Get on",
 ***             2: string "Unforgiven",
 ***             3: string "The fall",
 ***         ],
 ***         year: number 2010,
 ***     },
 ***     1: object:11 {
 ***         name: string "Fire It Up!",
 ***         tracks: array:12 [
 ***             0: string "Fire it up",
 ***             1: string "I'll be your doctor",
 ***             2: string "You love me back",
 ***             3: string "I come in peace",
 ***         ],
 ***         year: number 2012,
 ***     },
 *** ]
 ***/

// Wollen Sie alle Einträge eines Objekts auslesen,
// können Sie sich hierfür seine Keys besorgen
Object.keys(noten);
/*** [RESULT]
 *** array:13 [
 ***     0: string "mueller",
 ***     1: string "mayer",
 ***     2: string "schulz",
 ***     3: string "becker",
 ***     4: string "fröhlich",
 *** ]
 ***/

// Die Key-Liste kann auch sortiert werden
Object.keys(noten).sort();
/*** [RESULT]
 *** array:14 [
 ***     0: string "becker",
 ***     1: string "fröhlich",
 ***     2: string "mayer",
 ***     3: string "mueller",
 ***     4: string "schulz",
 *** ]
 ***/

keys = Object.keys(noten).sort();
for (var i = 0; i < keys.length; i++) {
    var name = keys[i];
    console.log("Die Note von " + name + " ist " + noten[name] + ".");
}
/*** [OUTPUT]
 *** Die Note von becker ist 3.1.
 ***/

// Aufgabe: Recherchieren Sie was JSON ist und wie es
// sich von XML unterscheidet.
/*** [RESULT]
 ***/
