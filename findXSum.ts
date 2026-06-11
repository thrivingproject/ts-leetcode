import assert = require("node:assert");

/**
 * The x-sum of an array is calculated by the following procedure:
 * - Count the occurrences of all elements in the array.
 * - Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
 * - Calculate the sum of the resulting array.

 * @param nums 1 <= n == nums.length <= 50, 1 <= nums[i] <= 50
 * @param k 1 <= x <= k <= nums.length
 * @param x 1 <= x <= k <= nums.length
 * @returns an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1]
 */
function findXSum(nums: number[], k: number, x: number): number[] {
    let ans: Array<number> = [];
    let l = 0, r = k - 1;
    const m: Map<number, number> = new Map();

    for (let i = l; i <= r; i++) {
        const num = nums[i]!;
        m.set(num, (m.get(num) ?? 0) + 1);
    }

    while (r < nums.length) {
        let n = 0;
        if (m.size < x) {
            for (let i = l; i <= r; i++)
                n += nums[i]!;
        }
        else
            n = xSum(m, x);
        ans.push(n)
        // update the map
        let key = nums[l]!
        m.set(key, Math.max(0, m.get(key)! - 1))
        l++;
        r++;
        key = nums[r]!
        m.set(key, (m.get(key) ?? 0) + 1);
    }

    return ans;
};

function xSum(m: Map<number, number>, x: number): number {
    let sum = 0;

    const freqNumDesc = [...m.entries()].sort((a, b) => b[1] - a[1] === 0 ? b[0] - a[0] : b[1] - a[1]);
    for (let index = 0; index < x; index++) {
        const el = freqNumDesc[index]!
        sum += el[0] * el[1];
    }

    return sum;
}

assert(JSON.stringify(findXSum([9, 2, 2], 3, 3)) === JSON.stringify([11, 15, 15, 15, 12]))
assert(JSON.stringify(findXSum([3, 8, 7, 8, 7, 5], 2, 2)) === JSON.stringify([11, 15, 15, 15, 12]))
assert(JSON.stringify(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2)) === JSON.stringify([6, 10, 12]))

