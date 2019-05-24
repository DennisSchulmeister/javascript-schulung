// Dieses Beispiel zeigt, wie Klassen aus anderen Sprachen in
// JavaScript abgebildet werden.

// Von Java sind Sie gewohnt, dass Sie ein Objekt erzeugen, indem
// Sie den new-Operator verwenden und dadurch den Konstruktor einer
// Klasse aufrufen. Die gute Nachricht ist, einen fast genauso
// aussehenden Aufurf gibt es auch in JavaScript. Die schlechte
// Nachricht ist, es gibt aber keine Klassen.

// Doch eins nach dem anderen. Häufig findet man im Internet
// Beispiele wie dieses:
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = function() {
        return this.width * this.height;
    }
}
/*** [RESULT]
 ***/

// Interessant daran ist, dass hier wieder das Schlüsselwort this
// auftaucht, die Funktion aber gar nicht innerhalb eines Dictionaries
// definiert wurde. Tatsächlich handelt es sich um eine so genannte
// "Konstruktor-Funktion". Denn ihre Aufgabe ist es, ein neu zu
// erzeugendes Objekt mit Attributen und Methoden zu versehen.

// Allerdings darf man die Methode nicht einfach so aufrufen. Man
// muss dabei immer den new-Operator verwenden.
rect = new Rectangle(10,7);
/*** [RESULT]
 *** object:1 {
 ***     getArea: function () {
 ***         return this.width * this.height;
 ***     },
 ***     height: number 7,
 ***     width: number 10,
 *** }
 ***/

// Der new-Operator bewirkt, dass die Funktion zwar ganz normal
// aufgerufen wird, das Schlüsselwort "this" innerhalb der Funktion
// aber auf ein neues, leeres Objekt zeigt.

// Es gelten also die bekannten Regeln für Objekte. Beispielsweise
// dass ein so erzeugtes Objekt einen Prototyp besitzt, in dem
// alle Attribute nachgeschlagen werden, die das Objekt selbst nicht
// besitzt, auf die aber jemand versucht zuzugreifen:
Object.getPrototypeOf(rect);
/*** [RESULT]
 *** object:2 {
 *** }
 ***/
rect.setWidth(10);
/*** [RESULT]
 *** TypeError: rect.setWidth is not a function
 ***/

// Diese Fehlermeldung soll heißen, dass das Attribut setWidth
// weder im Objekt noch in seinen Prototypen gefunden wurde.
// Ändern wir das, indem wir die Methode dem Prototyp hinzufügen:
Object.getPrototypeOf(rect).setWidth = function(width) {
    this.width = width;
}
Object.getPrototypeOf(rect).setHeight = function(height) {
    this.height = height;
}
/*** [RESULT]
 *** function (height) {
 ***     this.height = height;
 *** }
 ***/

// Jetzt können setWidth() und setHeight() aufgerufen werden.
rect.getArea();
/*** [RESULT]
 *** number 70
 ***/
rect.setWidth(20);
/*** [RESULT]
 ***/
rect.getArea();
/*** [RESULT]
 *** number 140
 ***/

rect
/*** [RESULT]
 *** object:1 {
 ***     getArea: function () {
 ***         return this.width * this.height;
 ***     },
 ***     height: number 7,
 ***     width: number 20,
 *** }
 ***/
Object.getPrototypeOf(rect);
/*** [RESULT]
 *** object:2 {
 ***     setHeight: function (height) {
 ***     this.height = height;
 *** },
 ***     setWidth: function (width) {
 ***     this.width = width;
 *** },
 *** }
 ***/

// Merke: Wir hätten die Methoden auch dem "rect"-Objekt direkt
// hinzufügen können. Stattdessen haben wir aber dem Prototyp
// verändert. Demnach müsste, wenn man ein neues "Rectangle"
// erzeugt ...
rect2 = new Rectangle(4,4);
rect2.getArea();
/*** [RESULT]
 *** number 16
 ***/
rect2.setWidth(5);
/*** [RESULT]
 ***/
rect2.setHeight(6);
/*** [RESULT]
 ***/
rect2.getArea();
/*** [RESULT]
 *** number 30
 ***/

// Tatsächlich! Dadurch, dass wir vorhin den Prototyp verändert
// haben, wirkt sich die Änderung auf alle "Rectangle"-Objekte aus.
Object.getPrototypeOf(rect2) === Object.getPrototypeOf(rect);
/*** [RESULT]
 *** boolean true
 ***/

// Tatsächlich ist das auch das empfohlene Vorgehen. Will man
// für eine Konstruktor-Funktion die Methoden definieren, die
// alle später erzeugten Objekte haben werden, soll man diese
// in den Prototyp aufnehmen. Deshalb gibt es dafür auch eine
// etwas kürzere Schreibweise:

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.pow(this.radius, 2) * Math.PI;
}
/*** [RESULT]
 *** function () {
 ***     return Math.pow(this.radius, 2) * Math.PI;
 *** }
 ***/

// Erzeugen wir ein Objekt und rufen die Methode auf.
circle = new Circle(10);
circle.getArea();
/*** [RESULT]
 *** number 314.1592653589793
 ***/

circle
/*** [RESULT]
 *** object:3 {
 ***     radius: number 10,
 *** }
 ***/

Object.getPrototypeOf(circle);
/*** [RESULT]
 *** object:4 {
 ***     getArea: function () {
 ***     return Math.pow(this.radius, 2) * Math.PI;
 *** },
 *** }
 ***/

// Statische Methoden aus Java lassen sich mit diesem Wissen
// auch abbilden. Wie Sie wissen, hängen statische Methoden
// an einer Klasse und nicht an einem Objekt. Sie werden also
// mit "Klasse.attribut" angesprochen. Nun, Klassen haben wir
// ja nicht in JavaScript. Stattdessen haben wir aber die
// Konstruktor-Funktion, die eine ähnliche Aufgaben hat.
// Statische Methoden hängen deshalb einfach an der Funktion:
Circle.getArea = function(radius) {
    return Math.pow(radius, 2) * Math.PI;
}
/*** [RESULT]
 *** function (radius) {
 ***     return Math.pow(radius, 2) * Math.PI;
 *** }
 ***/
Circle.getLength = function(radius) {
    return 2 * Math.PI * radius;
}
/*** [RESULT]
 *** function (radius) {
 ***     return 2 * Math.PI * radius;
 *** }
 ***/

// Die statischen Methoden werden nun wie gewohnt aufgerufen:
Circle.getArea(10);
/*** [RESULT]
 *** number 314.1592653589793
 ***/
Circle.getLength(10);
/*** [RESULT]
 *** number 62.83185307179586
 ***/

// Zum Beweis, dass die Objekte davon unberührt bleiben:
circle.getArea();
/*** [RESULT]
 *** number 314.1592653589793
 ***/
// Puh, Glück gehabt. :-)

// Kommen wir nochmal zu unserer Definition von "Rectangle"
// zurück. Ihnen wird sicher auffallen, dass die Methode
// getArea() nicht an den Prototyp angehängt wird, sondern
// sich die Methode einfach innerhalb der Konstruktor-
// Funktion befindet.
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = function() {
        return this.width * this.height;
    }
}
/*** [RESULT]
 ***/

// Im ersten Moment bewirkt das einfach nur, dass die Methode
// getArea direkt am Objekt und nicht am Prototyp hängt.
// Soweit nichts neues.
Rectangle
/*** [RESULT]
 *** function Rectangle(width, height) {
 ***     this.width = width;
 ***     this.height = height;
 ***
 ***     this.getArea = function() {
 ***         return this.width * this.height;
 ***     }
 *** }
 ***/
Object.getPrototypeOf(new Rectangle(1,1));
/*** [RESULT]
 *** object:5 {
 *** }
 ***/
Rectangle.prototype
/*** [RESULT]
 *** object:5 {
 *** }
 ***/

// Tatsächlich scheiden aber die Geister, welches Vorgehen
// nun wirklich das bessere ist. Oben stand noch, dass man
// Methoden besser im Prototyp definieren soll. Im Prinzip
// stimmt das auch, allerdings hat dieses Vorgehen auch
// einen interessanten Vorteil: Man kann private-Attribute
// und damit auch private-Methoden so in JavaScript abbilden:
function Square(width) {
    var area = width * width;
    this.getArea = function() { return area; }
}
/*** [RESULT]
 ***/

// getArea() ist ein öffentliches Attribut, wie gewohnt.
// Die Variable area ist jedoch private. Doch warum?
// Hierfür müssen Sie wissen, was ein "Closure" oder auf
// deutsch "Funktionsabschluss" ist.

// Vgl. https://de.wikipedia.org/wiki/Closure_%28Funktion%29
square = new Square(11);
/*** [RESULT]
 *** object:6 {
 ***     getArea: function () { return area; },
 *** }
 ***/
Object.getPrototypeOf(square);
/*** [RESULT]
 *** object:7 {
 *** }
 ***/
square.getArea();
/*** [RESULT]
 *** number 121
 ***/
square.area
/*** [RESULT]
 ***/
square.area == undefined
/*** [RESULT]
 *** boolean true
 ***/

// Sie sehen, man kann von außen wirklich nicht auf "area"
// zugreifen. Nur, wenn man die Methode getArea aufruft,
// kommt der erwartete Wert zurück. Übrigens: Nicht nur
// area ist ein privates Attribut, sondern auch der Parameter
// width, welcher der Methode übergeben wird. Denn Methoden-
// Parameter sind ja auch nichts anderes als lokale Variablen.

// Dass die Methode getArea() auf die Variable area zugreifen
// kann, liegt an dem Closure, das sie umgibt: Und zwar wurde
// die Methode ja innerhalb der Funktion Square(...) definiert.
// Dadurch kann die Methode automatisch auf alle Variablen
// zugreifen, die innerhalb der umgebenden Funktion vorhanden
// sind. Zum Beispiel:
function doubleNumber(nr) {
    var value = nr * 2;

    function showResult() {
        console.log(value);
    }

    showResult();
    return value;
}
/*** [RESULT]
 ***/
doubleNumber(7);
/*** [OUTPUT]
 *** number 14
 ***/

// Das Closure bewirkt, dass der Kontext mit den lokalen Variablen
// einer Funktion sogar über das Ende ihrer Ausführung im Speicher
// liegen bleibt, damit innere Funktionen darauf zugreifen können,
// sofern es noch eine Refernz auf sie gibt.

// Beispiel: Hier entsteht ein Closure, weil zwei Funktionen
// ineinander geschachtelt wurden. Ruft man die Funktion outer()
// auf, erhält man eine neue Funktion zurück, die dank dem Closure
// auf den Wert value jederzeit zugreifen kann.
function outer(value) {
    return function() {
        return value * value * value;
    };
}
/*** [RESULT]
 ***/
outer
/*** [RESULT]
 *** function outer(value) {
 ***     return function() {
 ***         return value * value * value;
 ***     };
 *** }
 ***/
newFunction = outer(7);
/*** [RESULT]
 *** function () {
 ***         return value * value * value;
 ***     }
 ***/

// Wir besitzen jetzt eine Referenz auf die innere Funktion,
// und das obwohl die Funktion outer längst beendet wurde.
// Da die innere Funktion somit im Nachhinein noch aufgerufen
// werden kann, müssen alle Variablen, auf die sie Zugriff
// hat, weiterhin im Hauptspeicher bleiben. Somit klappt der
// Zugriff in "return value * value * value"
newFunction();
/*** [RESULT]
 *** number 343
 ***/

// Welches Vorgehen Sie wählen, um Objekte zu definieren,
// bleibt Ihnen überlassen. Die einen nutzen gerne die
// Dictionary.Syntax, um Objekte zu definieren:
var obj = {
    attribut: 9,

    function square() {
    	return attribut * attribut;
	},
}

// Andere Leute argumentieren aber, dass Closures mehr
// Speicherplatz benötigen, als eine Definition der
// Methoden über das Prototyp-Objekt. Jedoch können Sie
// mit Closures auch private-Attribute realisieren, was
// sonst nicht geht ...

// Im nächsten Standard "JavaScript 6" wird es übrigens
// tatsächlich Klassen geben. Aber zum Einen handelt es
// sich dabei nur im eine etwas andere Schreibweise für
// die eben vorgestellten Konzepte und zum Anderen wird
// der Standard Stand 09/2015 noch von keinem Browser
// offiziel unterstützt. Klassen schauen wir uns daher
// ein ander mal an. :o)
/*** [RESULT]
 ***/
