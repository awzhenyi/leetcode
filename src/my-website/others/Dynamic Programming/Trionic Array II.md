---
tags:
 - Medium
---

https://leetcode.com/problems/trionic-array-ii/

## Problem Understanding

You are given an array `nums`. A **trionic** subarray is a contiguous subarray that follows a three-part pattern:

1. **Strictly increasing** segment  
2. **Strictly decreasing** segment  
3. **Strictly increasing** segment again  

So the shape is **up → down → up**. The task is to find the **maximum sum** of any such trionic subarray.

For example, in `[1, 3, 5, 4, 2, 6]`, one trionic subarray is `[1, 3, 5]` (inc), `[5, 4, 2]` (dec), `[2, 6]` (inc again)—the sum of that entire subarray is a candidate. We want the maximum over all valid trionic subarrays.

## Solution Approach

The solution uses a **3-stage state machine** in a single pass:

- **Stage 1**: Best sum achievable for a contiguous **strictly increasing** segment (so far).
- **Stage 2**: Best sum achievable for a segment that is **increasing then strictly decreasing** (so far).
- **Stage 3**: Best sum achievable for a full **trionic** segment: increasing → decreasing → increasing (so far).

At each index `i` we look at the **transition** between `nums[i-1]` and `nums[i]`:

1. **If `nums[i] > nums[i-1]` (going up)**  
   - Extend the first increasing segment: `stage_1 = max(stage_1 + nums[i], nums[i-1] + nums[i])`.  
   - If we were in the decreasing phase (stage_2), we can start the third (increasing) phase: `stage_3 = max(stage_2 + nums[i], stage_3 + nums[i])`, and update the answer with `stage_3`.  
   - Reset `stage_2` to `-inf` because we are no longer in a decreasing part.

2. **If `nums[i] < nums[i-1]` (going down)**  
   - Extend or start the decreasing phase after an increasing one: `stage_2 = max(stage_2 + nums[i], stage_1 + nums[i])`.  
   - Reset `stage_1` and `stage_3` because the current run no longer fits a trionic that ends here.

3. **If `nums[i] == nums[i-1]` (flat)**  
   - Strict inc/dec is broken; reset all three stages to `-inf`.

The result is the maximum value of `stage_3` seen during the loop (and we need at least two elements to have any transition).

## Why This Solution Works

- We only need to consider **contiguous** subarrays and **strict** comparisons, so a single left-to-right pass is enough.  
- Each stage represents the best sum for a prefix of the current “run” in that phase. When we see a direction change, we either advance to the next stage (inc→dec or dec→inc) or reset.  
- By updating `stage_3` only when we extend the third (increasing) phase and then taking the max over all such `stage_3`, we consider every possible trionic subarray that ends at the current position.  
- Using `-inf` for “invalid” or reset states ensures we never use an incomplete or impossible pattern as a candidate.

## Layman Explanation

Think of the array as a roller coaster: we want a stretch that goes **up**, then **down**, then **up** again. We are allowed to pick any contiguous stretch and sum the numbers on it, and we want the **largest** such sum.

The code walks left to right and keeps three “best so far” sums:  
(1) best “only up” segment,  
(2) best “up then down” segment,  
(3) best “up then down then up” segment.  
Whenever we move up after a down, we complete a trionic and update the answer. Whenever the sequence stops being strictly up or down (or goes flat), we reset the relevant stages. In the end, the maximum value we ever had for the full “up–down–up” segment is the answer.

## Complexity

- **Time**: One pass over `nums` with O(1) work per index → **O(n)**.  
- **Space**: Only a few variables (`stage_1`, `stage_2`, `stage_3`, `res`, loop index) → **O(1)**.

## Solution

```python
class Solution:
    def maxSumTrionic(self, nums: List[int]) -> int:
        # Keep 3 stages
        # 1. best sum of increasing
        # 2. best sum of decreasing after 1.
        # 3. best sum of increasing after 2.
        n = len(nums)
        res = -inf
        stage_1 = stage_2 = stage_3 = -inf
        for i in range(1, n):
            if nums[i] > nums[i - 1]:
                stage_1 = max(stage_1 + nums[i], nums[i] + nums[i - 1])
                stage_3 = max(stage_2 + nums[i], stage_3 + nums[i])
                res = max(res, stage_3)
                stage_2 = -inf
            elif nums[i] < nums[i - 1]:
                stage_2 = max(stage_2 + nums[i], stage_1 + nums[i])
                stage_1 = stage_3 = -inf
            else:
                stage_1 = stage_2 = stage_3 = -inf
        return res
```
