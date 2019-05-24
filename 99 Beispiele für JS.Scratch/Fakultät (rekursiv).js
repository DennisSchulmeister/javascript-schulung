// Rekursive Berechnung der Fakultät

function factorial(nr) {
    if (nr < 0) {
        return NaN;
    } else if (nr < 2) {
        return 1;
    } else {
        return nr * factorial(nr - 1);
    }
}
/*** [RESULT]
 ***/

factorial(-5);
/*** [RESULT]
 *** number NaN
 ***/

factorial(0);
/*** [RESULT]
 *** number 1
 ***/

factorial(1);
/*** [RESULT]
 *** number 1
 ***/

factorial(6);
/*** [RESULT]
 *** number 720
 ***/
