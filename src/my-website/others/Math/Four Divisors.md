---
tags:
 - Medium
---

https://leetcode.com/problems/four-divisors

## Problem Understanding
For each number in the array, find if it has exactly 4 divisors. If it does, sum all 4 divisors. Return the total sum across all numbers.

**Example**: `nums = [21, 4, 7]`
- `21` has divisors: `1, 3, 7, 21` (4 divisors) → sum = 32
- `4` has divisors: `1, 2, 4` (3 divisors) → skip
- `7` has divisors: `1, 7` (2 divisors) → skip
- Answer: 32

## Key Insight: Divisors Come in Pairs
For any divisor `i` of `num`, there's a corresponding divisor `num // i`. This means we only need to check up to `√num`.

**Why this works**:
- If `i` divides `num`, then `num // i` also divides `num`
- Divisors come in pairs: `(i, num//i)`
- We only need to check from 1 to `√num` to find all pairs
- For each `i` we find, we get both `i` and `num//i`

**Edge Case**: If `num` is a perfect square (e.g., `num = 16`, `i = 4`), then `i == num//i`, so we use a set to avoid counting the same divisor twice.

## Algorithm
For each number:
1. Check all integers from 1 to `√num`
2. If `i` divides `num`, add both `i` and `num//i` to a set
3. If the set has exactly 4 divisors, return their sum
4. Otherwise, return 0

**Why use a set?**: Prevents duplicates when `num` is a perfect square (e.g., `16` has divisor `4` which appears as both `i=4` and `num//i=4`).

```python
from typing import List
from math import isqrt

class Solution:
    def sumFourDivisors(self, nums: List[int]) -> int:
        def findFourDivisors(num: int) -> int:
            divisors = set()

            for i in range(1, isqrt(num) + 1):
                if num % i == 0:
                    divisors.add(i)
                    divisors.add(num // i)
                    
            return sum(divisors) if len(divisors) == 4 else 0

        return sum(findFourDivisors(num) for num in nums)

# Time Complexity: O(N × √M)
#   - N = number of elements in nums array
#   - M = maximum value in nums
#   - For each number, we check up to √num divisors
#   - Each divisor check is O(1)
#   - Total: O(N × √M) where M is the max value
# Space Complexity: O(1) per number, O(√M) worst case
#   - Set stores at most O(√M) divisors (when number has many divisors)
#   - But we only process one number at a time
#   - In practice, for numbers with exactly 4 divisors, set size is constant (4)
#   - Overall: O(1) extra space (not counting input)
```