import assert = require("node:assert");

function countGoodSubstrings(s: string): number {
    let l = 0;
    let count = 0;
    for (; l + 2 < s.length; l++) {
        let first = s.charAt(l + 0);
        let second = s.charAt(l + 1);
        let third = s.charAt(l + 2);
        if ((first === second) || second === third || first === third) continue;
        count++;
    }
    return count;
};

assert(countGoodSubstrings("xyzzaz") === 1)
assert(countGoodSubstrings("aababcabc") === 4)