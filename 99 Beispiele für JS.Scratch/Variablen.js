// Diese Datei erklärt, wie Variablen in JavaScript funktionieren
// und was Listen und Dictionaries sind.

// In Java sind Sie es gewohnt, jede Variable vor Ihrer Verwendung
// deklarieren zu müssen. Wollen Sie auf eine Variable zugreifen,
// die nicht deklariert wurde, quittiert Ihen das der Compiler mit
// einer Fehlermeldung.

// Nicht so in JavaScript. Erstens haben wir hier keinen Compiler
// und zweites, werden Variablen nicht deklariert, sie werden
// einfach verwendet. Zum Beispiel so:
antwort = 42;
/*** [RESULT]
 *** number 42
 ***/
frage = "nach dem Leben, dem Universum und dem ganzen Rest";
/*** [RESULT]
 *** string "nach dem Leben, dem Universum und dem ganzen Rest"
 ***/
gefunden = false
/*** [RESULT]
 *** boolean false
 ***/

// Fällt Ihnen was auf? Ja richtig, woher weiß der Computer
// den, welchen Datentyp die Variablen haben? In Java müssen
// Sie bei der Deklaration immer ganz genau angeben, welchen
// Typ eine Variable haben soll. Und wenn Sie dann versuchen,
// etwas anderes darin zu speichern, ...

// Die Antwort ist einfach: Ohne Variablen-Deklarationen
// muss JavaScript selbst herausfinden, welchen Typ eine
// Variable hat. Das passiert bei der Zuweisung und ergibt
// sich aus dem Wert, den man in die Variable stellen will.

// Sie schreiben einen String in die Variable? Von nun an
// ist es eine String-Variable. Sie schreiben eine Ganzzahl
// hinein, von nun an ist es eine Integer-Variable usw.

// Dabei kann sich der Typ einer Variable jederzeit ändern:
gefunden = false
gefunden = "Leider noch nicht"
/*** [RESULT]
 *** string "Leider noch nicht"
 ***/

// Allerdings gibt es in JavaScript das Schlüsselwort "var",
// um Variablen zu definieren. Und das sollten Sie auch
// so oft wie möglich verwenden. Warum? Weil alle Variablen,
// die ohne "var" definiert werden, automatisch globale
// Variablen sind -- also in jeder Methode und jeder
// Funktion a) existieren und b) denselben Wert haben.
// Technisch gesehen werden globale Variablen automatisch
// an das "window"-Objekt gehängt.
frage
/*** [RESULT]
 *** string "nach dem Leben, dem Universum und dem ganzen Rest"
 ***/
// Ist dasselbe wie
window.frage
/*** [RESULT]
 *** string "nach dem Leben, dem Universum und dem ganzen Rest"
 ***/

// Oder
buchtitel = "Per Anhalter durch die Galaxis"
// ist dasselbe wie
window.buchtitel = "Per Anhalter durch die Galaxis"
/*** [RESULT]
 *** string "Per Anhalter durch die Galaxis"
 ***/

// Stellt man der Variable bei der ersten Zuweisung das
// Wort "var" vorne dran, verändert sich das Verhalten:
// Außerhalb einer Funktion oder Method wird die Variable
// weiterhin als globale Variable definiert, indem sie
// an das "window"-Objekt angehängt wird. Innerhalb einer
// Funktion oder Methode, wir sie aber zu eine lokalen
// Variable, die nur innerhalb der Funktion/Methode
// überhaupt vorhanden ist.

// Das hier mach noch keinen Unterschied:
var fortsetzung = "Das Restaurant am Ende des Universums";
window.fortsetzung === fortsetzung;
/*** [RESULT]
 *** boolean true
 ***/

// Innerhalb einer Funktion allerdings schon:
function test() {
    var isbn = "3-453-14605-0";
    author = "Douglas Adams";
}
/*** [RESULT]
 ***/

// Zunächst passiert noch nichts:
isbn
/*** [RESULT]
 *** ReferenceError: isbn is not defined
 ***/
author
/*** [RESULT]
 *** ReferenceError: author is not defined
 ***/

// Lassen wir nun test laufen
test()
/*** [RESULT]
 ***/

// Und siehe da ...
isbn
/*** [RESULT]
 *** ReferenceError: isbn is not defined
 ***/
author
/*** [RESULT]
 *** string "Douglas Adams"
 ***/

// Vor der Variable "author" wurde das "var" vergessen.
// Die Variable wurde daher an das window-Objeckt angehängt.
window.author
/*** [RESULT]
 *** string "Douglas Adams"
 ***/
