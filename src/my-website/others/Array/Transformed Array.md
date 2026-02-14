---
tags:
 - Medium
---

https://leetcode.com/problems/transformed-array

## Problem Understanding

Given an array `nums`, we need to construct a transformed array where each element at index `i` is determined by the value at that position:
- If `nums[i] == 0`, the transformed value is `0`
- Otherwise, the transformed value is the element at index `(i + nums[i]) % n` (using circular array indexing)

The transformation uses the value at each position as an offset to look ahead (or wrap around) in the array.

## Solution Approach

The solution directly implements the transformation rule:

1. **Iterate through each element** in the original array
2. **For each element at index `i`**:
   - If the value is `0`, append `0` to the result
   - Otherwise, calculate the target index using `(i + num) % n` where:
     - `i` is the current index
     - `num` is the value at that index
     - `n` is the array length
     - The modulo operation handles circular wrapping
3. **Return the transformed array**

## Why This Solution Works

- **Direct transformation**: The solution follows the problem's transformation rule exactly
- **Circular indexing**: The modulo operation `(i + num) % n` ensures that:
  - If `i + num < n`, we access a forward position
  - If `i + num >= n`, we wrap around to the beginning of the array
- **Zero handling**: Zeros are preserved as zeros in the transformed array

## Layman Explanation

Think of this like a circular board game where each square has a number:
- If a square shows `0`, you stay at `0` in the transformed version
- If a square shows a number like `3`, you look `3` positions ahead (wrapping around if you reach the end) and use that square's value

For example, with array `[1, 2, 3, 4, 5]`:
- At index 0 (value 1): Look 1 position ahead → index 1 has value 2 → transformed[0] = 2
- At index 1 (value 2): Look 2 positions ahead → index 3 has value 4 → transformed[1] = 4
- At index 2 (value 3): Look 3 positions ahead → index 0 (wrapping) has value 1 → transformed[2] = 1
- At index 3 (value 4): Look 4 positions ahead → index 2 (wrapping) has value 3 → transformed[3] = 3
- At index 4 (value 5): Look 5 positions ahead → index 4 (wrapping) has value 5 → transformed[4] = 5

## Solution

```python
class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        arr = []
        n = len(nums)
        for i, num in enumerate(nums):
            if num == 0:
                arr.append(num)
            else:
                arr.append(nums[(i + num) % n])            
        return arr

# Time Complexity: O(n) where n is the length of nums
#   - Single pass through the array: O(n)
#   - Each iteration does O(1) work (index calculation and array access)
#   - Total: O(n)

# Space Complexity: O(n)
#   - The result array `arr` stores n elements: O(n)
#   - Total: O(n)
```

Shorter version (pythonic way)
```python
class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        return [nums[(i + nums[i]) % n] for i in range(n)]
# Time Complexity: O(N)
# Space Complexity: O(N)
```

