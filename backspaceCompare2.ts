import assert = require("node:assert");

assert(backspaceCompare("ab#c", "ad#c") === true);
assert(backspaceCompare("ab##", "c#d#") === true);
assert(backspaceCompare("bxj##tw", "bxo#j##tw") === true);
assert(backspaceCompare("bxj##tw", "bxj###tw") === false);
assert(backspaceCompare("a##c", "#a#c") === true);

/**
 * 844. O(n) time and O(1) space
 * @param s 1 <= s.length, t.length <= 200
 * @param t s and t only contain lowercase letters and '#' characters.
 */
function backspaceCompare(s: string, t: string): boolean {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;
    let sCharsSkip = 0, tCharsSkip = 0;

    while (tPointer >= 0 || sPointer >= 0) {
        while (s.charAt(sPointer) === '#') {
            sPointer--;
            sCharsSkip++;
        }
        while (t.charAt(tPointer) === '#') {
            tPointer--;
            tCharsSkip++;
        }

        while (sCharsSkip && s.charAt(sPointer) !== '#') {
            sPointer--;
            sCharsSkip--;
        }
        while (tCharsSkip && t.charAt(tPointer) !== '#') {
            tPointer--;
            tCharsSkip--;
        }

        if (t.charAt(tPointer) === '#' || s.charAt(sPointer) === '#') continue;
        if (s.charAt(sPointer--) !== t.charAt(tPointer--)) return false;
    }

    return true;
};
