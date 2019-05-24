// Dieses Beispiel zeigt, wie in JavaScript Objekte definiert
// werden können und wie Objekte voneinander erben können.

// Merke: Objekte sind Dictionaries
//
//  * Ein Objekt ist in Wirklichkeit ein Dictionary
//  * Die Attribute des Objekts sind die Einträge des Dictionaries
//  * obj.attribute und obj["attribute"] ist also exakt dasselbe

// Daraus folgt, dass neue Objekte als Dictionary angelegt werden:
myObject = {
    attribute: "",
    getAttribute: function() { return this.attribute; },
    setAttribute: function(na) { this.attribute = na; },
}
/*** [RESULT]
 *** object:3 {
 ***     attribute: string "",
 ***     getAttribute: function () { return this.attribute; },
 ***     setAttribute: function (na) { this.attribute = na; },
 *** }
 ***/

// Jedes Objekt besitzt einen Prototype, der über das Attribut
// __proto__ angesprochen werden kann. Dieses Attribut ist aber
// ab JavaScript 6 veraltet und sollte daher nicht mehr benutzt
// werden. Stattdessen kann man den Prototyp eines Objekts mit
// Object.getPrototypeOf(...) erfahren.

// Besitzt ein Objekt keinen Prototyp, ist dieser null.
Object.getPrototypeOf(myObject);
/*** [RESULT]
 *** object:4 {
 *** }
 ***/
Object.getPrototypeOf(
    Object.getPrototypeOf(myObject)
);
/*** [RESULT]
 ***/

// Greift man nun auf ein Attribut zu, wird dieses erst innerhalb
// des Objekts selbst gesucht (sog. "own properties"). Wird es dort
// nicht gefunden, wird es im Prototyp des Objekts gesucht. Wird
// es dort nicht gefunden, wird im Prototyp des Prototyps des
// Objekts gesucht usw. Erst wenn es in keinem Prototyp gefunden
// wurde, gilt das Attribut als nicht definiert.
myObject.attribute;
/*** [RESULT]
 *** string ""
 ***/
myObject.unknownAttribute;
/*** [RESULT]
 ***/

// Mit der Methode Object.setPrototypeOf() kann der Prototyp eines
// Objekts im Nachhinein überschrieben werden.
newPrototype = {
    inheritedAttribute: "Attribute in prototype",
};
Object.setPrototypeOf(myObject, newPrototype);
/*** [RESULT]
 *** object:3 {
 ***     attribute: string "",
 ***     getAttribute: function () { return this.attribute; },
 ***     setAttribute: function (na) { this.attribute = na; },
 *** }
 ***/
myObject
/*** [RESULT]
 *** object:3 {
 ***     attribute: string "",
 ***     getAttribute: function () { return this.attribute; },
 ***     setAttribute: function (na) { this.attribute = na; },
 *** }
 ***/
Object.getPrototypeOf(myObject);
/*** [RESULT]
 *** object:5 {
 ***     inheritedAttribute: string "Attribute in prototype",
 *** }
 ***/
myObject.inheritedAttribute;
/*** [RESULT]
 *** string "Attribute in prototype"
 ***/

// In der Praxis würde man eher den umgekehrten Weg gehen.
// Nicht den Prototyp eines Objekts überschreiben, sondern
// ein Objekt als Prototyp für ein neues Objekt benutzen.

// Hierfür kann die Methode Object.create() verwendet werden.
// Man übergibt ihr ein Objekt, welches als Prototyp für ein
// neues Objekt verwendet wird, das sie erzeugt.
extendedObject = Object.create(myObject);
/*** [RESULT]
 *** object:6 {
 *** }
 ***/

// Der Prototyp von extendedObject zeigt jetzt auf myObejct.
Object.getPrototypeOf(extendedObject);
/*** [RESULT]
 *** object:3 {
 ***     attribute: string "",
 ***     getAttribute: function () { return this.attribute; },
 ***     setAttribute: function (na) { this.attribute = na; },
 *** }
 ***/

// Es handelt sich wirklich um myObject:
Object.getPrototypeOf(extendedObject) === myObject;
/*** [RESULT]
 *** boolean true
 ***/

// Ruft man jetzt aber z.B. von dem neuen Objekt extendedObject
// die Methode setAttribute() auf, wirkt sich das nur auf das
// neue Objekt, nicht aber auf myObject aus!
extendedObject.setAttribute("Neuer Wert");
/*** [RESULT]
 ***/
extendedObject.getAttribute();
/*** [RESULT]
 *** string "Neuer Wert"
 ***/
myObject.getAttribute();
/*** [RESULT]
 *** string ""
 ***/

// Das Geheimnis liegt im Schlüsselwort "this", das in der
// Methode verwendet wird. Es zeigt immer auf das Objekt, mit
// dem die Methode aufgerufen wird und daher nicht zwangsläufig
// auf das Objekt, in dem die Methode definiert wurde.

// Vor dem Aufruf von extendedObject.setAttribute() gab es in
// extendedObject das Attribut "attribute" noch nicht. Jetzt
// nach dem Aufruf ist es vorhanden, da es in der "geerbten"
// Methode mit "this.attribute = na" gesetzt wurde.

// Merke: extendedObject.setAttribute() --> this = extendedObject
//        myObject.setAttribute() --> this = myObject.
extendedObject
/*** [RESULT]
 *** object:6 {
 ***     attribute: string "Neuer Wert",
 *** }
 ***/
