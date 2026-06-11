import assert = require("node:assert");

assert(divisorSubstrings(240, 2) === 2);
assert(divisorSubstrings(430043, 2) === 2);

/**
 * 2269
 *
 * @param {number} num 1 <= num <= 109
 * @param {number} k 1 <= k <= num.length
 * @returns {number} number of substrings of num that have length k and are divisors of num
 */
function divisorSubstrings(num: number, k: number): number {
    let s = num.toString()
    let l = 0;
    let count = 0;

    while (l + k <= s.length) {
        let subNum = Number(s.slice(l, l + k))
        l++;
        if (num % subNum == 0) count++;
    }

    return count;
};