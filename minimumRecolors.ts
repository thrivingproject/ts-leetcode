import assert = require("node:assert");

assert(minimumRecolors("WBWBBBW", 2) === 0);
assert(minimumRecolors("WBBWWBBWBW", 7) === 3);
assert(minimumRecolors("WBBWWBBWBWBBBBB", 7) === 1);

/**
 * Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.
 * 
 * @param blocks n == blocks.length, 1 <= n <= 100, blocks[i] is either 'W' or 'B'.
 * @param k 1 <= k <= n
 */
function minimumRecolors(blocks: string, k: number): number {
    let min = Infinity;
    let numWhites = 0;
    let r = 0;
    let l = 0;

    for (; r < k; r++) {
        if (blocks.charAt(r) === 'W') {
            numWhites++;
        }
    }
    min = numWhites;

    while (r < blocks.length) {
        if (blocks.charAt(l) === 'W') numWhites--;
        if (blocks.charAt(r) === 'W') numWhites++;
        if (numWhites < min) min = numWhites;
        r++;
        l++;
    }

    return min;
};