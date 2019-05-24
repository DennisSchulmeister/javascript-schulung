// Willkommen zu JS.Scratch
// ========================
// 
// Dies ist ein interaktiver JavaScript-Editor.
// Mit ihm können Sie einfach mit JavaScript experimentieren.
// Schreiben Sie etwas Code und klicken Sie auf "Ausführen",
// um das Ergebnis zu sehen.
// 
// Viel Spaß!
function calcFullName(first, last) {
    fullname = `${first} ${last}`;
    return fullname;
}
/*** [RESULT]
 ***/

calcFullName("Dennis", "Schulmeister-Zimolong");
/*** [RESULT]
 *** string "Dennis Schulmeister-Zimolong"
 ***/

fullname
/*** [RESULT]
 *** string "Dennis Schulmeister-Zimolong"
 ***/

window.fullname
/*** [RESULT]
 *** string "Dennis Schulmeister-Zimolong"
 ***/

function test() {
    return fullname;
}
/*** [RESULT]
 ***/

test();
/*** [RESULT]
 *** string "Dennis Schulmeister-Zimolong"
 ***/
