---
tags:
 - Medium
---

https://leetcode.com/problems/longest-consecutive-sequence/

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        ans = 0
        for num in nums:
            #Beginning of a sequence
            if num - 1 not in numSet:
                temp = num
                while temp in numSet:
                    temp+=1
                ans = max(ans, temp-num)
        return ans

# Time Complexity: O(N)
# Space Complexity: O(N)
```