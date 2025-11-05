---
tags:
 - Easy
---

https://leetcode.com/problems/single-number/

1. Recognise the bitwise property XOR. If a number XOR 0, it remains as the number. If it XOR itself, it becomes 0. This means that after XOR through the array, the final answer is the single number

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        #0 XOR num = num
        #num XOR num = 0
        ans = 0
        for num in nums:
            ans ^= num
        return ans
        
# Time Complexity: O(N)
# Space Complexity: O(1)
```