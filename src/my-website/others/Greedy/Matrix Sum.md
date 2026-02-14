---
tags:
 - Medium
---

https://leetcode.com/problems/maximum-matrix-sum

## Problem Understanding
Given a matrix, you can flip the sign of an entire row or column (multiply all elements by -1). Find the maximum possible sum after performing any number of such operations.

**Key Constraint**: Flipping a row/column flips ALL elements in that row/column.

## Key Insight: Pairing Negatives
The crucial observation is that we can flip pairs of negative numbers to positive by flipping rows/columns.

**Why this works**:
- Flipping a row/column affects all elements in it
- If two negatives are in the same row/column, flipping it makes both positive
- If they're in different rows/columns, we can flip both to make them positive
- **Important**: We can rearrange which numbers are negative through row/column flips

**The Strategy**:
1. **Even number of negatives**: Flip them all to positive → maximum sum is sum of all absolute values
2. **Odd number of negatives**: We must leave one negative. To minimize loss, make the smallest absolute value negative

**Why subtract `2 * min_abs`?**:
- If we sum all absolute values, we're counting `min_abs` as positive
- But we need one negative, so we change it from `+min_abs` to `-min_abs`
- This reduces the sum by `2 * min_abs` (difference between `+min_abs` and `-min_abs`)

**Edge Case**: If there's a `0` in the matrix, `min_abs` will be 0, so we don't lose anything (perfect for the odd negative case).

```python
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        total = 0
        neg_count = 0
        min_abs = inf

        for row in matrix:
            for num in row:
                if num < 0:
                    neg_count += 1
                total += abs(num)
                # account for 0 which should be the 'biggest' number that can be negative!
                min_abs = min(min_abs, abs(num))

        if neg_count % 2 == 1:
            total -= 2 * min_abs

        return total

# Time Complexity: O(N²)
#   - N = number of rows/columns (assuming N×N matrix)
#   - Single pass through all N² elements
#   - Each element processed once with O(1) operations
#   - Total: O(N²)
# Space Complexity: O(1)
#   - Only using constant extra variables (total, neg_count, min_abs)
#   - No additional data structures needed
#   - Space usage independent of input size
```