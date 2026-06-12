const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;

function reverseOnlyLetters(s: string): string {
    const chars = s.split("");
    let l = 0, r = chars.length - 1;
    while (l < r) {
        if (!isAlpha(chars[l]!)) {
            l++; continue;
        }
        if (!isAlpha(chars[r]!)) {
            r--; continue;
        }
        const temp = chars[l]!;
        chars[l++] = chars[r]!;
        chars[r--] = temp;
    }
    return chars.join('');
};

const isAlpha = (s: string) => {
    const code = s.charCodeAt(0);
    return code >= LOWERCASE_A && code <= LOWERCASE_Z ||
        code >= UPPERCASE_A && code <= UPPERCASE_Z;
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));