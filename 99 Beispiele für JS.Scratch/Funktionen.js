// Diese Datei zeigt, warum Funktionen in JavaScript im
// Vergleich zu Java so mächtig sind.

// Da die generelle Syntax von JavaScript stark an Java
// (oder besser an alle C-artigen Sprachen) angelehnt ist,
// werden auch ausführbare Programmteile ähnlich definiert.
// In Java nennen Sie sich Methoden, hier nennen Sie sich
// Funktionen.

// Allerdings gibt es folgende Abweichungen:
//
//   * Es wird kein Rückgabewert definiert
//   * Generell gibt es keine Schlüsselwörter wie "public"
//     oder "static". Vor der Funktion steht einfach nichts
//   * Die Parameter können zwar angegeben werden, aber
//     auch hier wird der Typ weggelassen

// Warum? Weil die Parameter und der Rückgabewert einer
// Funktion Variablen sind und weil sich der Typ einer
// Variable aus ihrem Inhalt ergibt.

// Definieren wird nun eine simple Funktion:
function simple() {
    console.log("Funktion simple() aufgerufen");
}
/*** [RESULT]
 ***/

// Man sieht, dass die Funktion mit "function" eingeleitet
// wird. Es folgen der Name und in Klammern die Parameterliste,
// die hier allerdings leer ist.

// Rufen wir die Funktion auf:
simple();
/*** [OUTPUT]
 *** Funktion simple() aufgerufen
 ***/

// Sieht auch nicht wirklich anders als in Java aus. Nur
// da es keine Methode ist, steht vor dem Namen der Funktion
// auch kein Objekt. Aber keine Angst, auch in JavaScript
// gibt es Objekte und Methode. Das schauen wir uns hier
// aber noch nicht an.

// Und nun eine Funktion mit Parameter und Rückgabewert:
function times(number1, number2) {
    return number1 * number2;
}
/*** [RESULT]
 ***/

times(10, 8);
/*** [RESULT]
 *** number 80
 ***/

var result = times(12, 7);
/*** [RESULT]
 ***/
result
/*** [RESULT]
 *** number 84
 ***/

// Soweit alles ganz einfach. Jetzt kommt aber der Hammer!
// Denn anders als in Java, sind Funktionen oder Methoden
// in JavaScript selbst auch Objekte. Das heißt, man kann
// mit ihnen alles machen, was man so mit Objekten auch
// machen würde.

// Zum Beispiel sie in Variablen speichern
multiply = times;
multiply(3, 4);

// Oder sie überschreiben
times = function(amount, text) {
    for (var i = 0; i < amount; i++) {
        console.log(text);
    }
};
/*** [RESULT]
 *** function (amount, text) {
 ***     for (var i = 0; i &lt; amount; i++) {
 ***         console.log(text);
 ***     }
 *** }
 ***/

times(3, "Carpe Diem!");
/*** [OUTPUT]
 *** Carpe Diem!
 ***/

// Die alte Funktion haben wir in "multiply" gespeichert.
// Sie kann also immer noch aufgerufen werden:
multiply(5, 8);
/*** [RESULT]
 *** number 40
 ***/

// Dadurch eröffnen sich interessante Möglichkeiten.
// Man kann eine Funktion auch einer anderen Funktion
// übergeben. So etwas wird häufig "callback" genannt.
function produceResult(callback) {
    result = 7 * 6;
    callback(result);
}

function display(value) {
    console.log(value);
}

produceResult(display);
/*** [OUTPUT]
 *** number 42
 ***/

// Die Funktion "display" wird an "produceResult" als
// Parameter übergeben. Der Parameter heißt "callback"
// weshalb die übergebene Funktion mit "callback(result)"
// aufgerufen wird.

// Überlegen Sie: Wie würden Sie so etwas ähnliches mit
// Java programmieren?

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/*** [OUTPUT]
 *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ***/

// Auch das war ein Funktionsaufruf. Allerdings ist die
// Funktion hier teil eines Objekts, weshalb sie hier auch
// eine Methode genannt wird. Der Aufruf funktioniert exakt
// wie von Java her bekannt.

// Ok, das soll erst mal genügen. Wenn Sie sich noch tiefer
// mit der Materie beschäftigen wollen, finden Sie heraus,
// was die Methoden call(), apply() und bind() bedeuten.
/*** [RESULT]
 ***/
