// 1763. Longest Nice Substring

import assert = require("node:assert");

assert(longestNiceSubstring("abcdABCD") === "abcdABCD");
assert(longestNiceSubstring("YazaAay") === "aAa");
assert(longestNiceSubstring("dDzeE") === "dD");
assert(longestNiceSubstring("Bb") === "Bb");
assert(longestNiceSubstring("c") === "");
assert(longestNiceSubstring("HkhBubUYy") === "BubUYy");
assert(longestNiceSubstring("ijIJwuUnW") === "ijIJ");

function longestNiceSubstring(s: string): string {
    let max = 1, l = 0, r = 0;
    for (let i = 0; i < s.length - 1; i++) {
        // let j = s.length since substring end includes the characters up to, but not including,
        // the character indicated by end (when j = s.length, substring end will be s.length - 1)
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.substring(i, j)
            if (sub.length > max && isNice(sub)) {
                max = sub.length;
                l = i, r = j;
            }
        }
    }
    return s.substring(l, r);
}

function isNice(str: string): boolean {
    const set = new Set(str);
    for (const char of str) {
        if (!set.has(char.toUpperCase()) || !set.has(char.toLowerCase())) {
            return false;
        }
    }
    return true;
}