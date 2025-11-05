---
tags:
 - Easy
---

https://leetcode.com/problems/number-of-1-bits

1. when a number N is bitwise AND with N-1, it flips the least significant 1-bit.

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0
        while n != 0:
            ans += 1
            n &= (n-1)
        return ans
# Time Complexity: O(N), where N == number of 1 bits
# Space Complexity: O(1)
```