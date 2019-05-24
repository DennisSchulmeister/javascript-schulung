// Nicht-Rekursive Berechnung der Fakultät

function factorial(nr) {
    if (nr < 0) {
        return NaN;
    }

    result = 1;

    for (let i = 2; i <= nr; i++) {
        result *= i;
    }

    return result;
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
