// 1984. Minimum Difference Between Highest and Lowest of K Scores

import assert = require("assert");

assert(minimumDifference([9, 4, 1, 7], 2) === 2)
assert(minimumDifference([90], 1) === 0)

/**
 * Return the minimum possible difference of between the highest and the lowest of k element in nums
 * 
 * @param nums 0 <= nums[i] <= 10^5
 * @param k 1 <= k <= nums.length <= 1000
 */
function minimumDifference(nums: number[], k: number): number {
    let l = 0, r = l + k - 1;
    let minDiff = Infinity;

    // sort the array
    nums.sort((a, b) => a - b)

    // if k == nums.length then return diff between r and l
    if (k === nums.length) return nums[nums.length - 1]! - nums[0]!;

    // use sliding window of size k and keep track of smallest difference between r and l
    while (r < nums.length) {
        let diff = nums[r]! - nums[l]!;
        if (diff < minDiff) minDiff = diff;
        l += 1; r += 1;
    }

    return minDiff;
};

